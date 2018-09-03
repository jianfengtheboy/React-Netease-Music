import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import "./progress.scss"

//进度条拖动组件
class Progress extends Component {
    static propTypes = {
        percent : PropTypes.number.isRequired,
        percentProgress : PropTypes.number,
        dragStart : PropTypes.func, // 拖拽开始事件
        dragMove : PropTypes.func, // 拖曳中事件
        dragEnd : PropTypes.func // 拖曳结束事件
    }

    constructor(props) {
        super(props)
        this.state = {
            offsetWidth : 0,
            status : false, //是否可拖动
            startX : 0, //记录最开始点击的X坐标
            left : 0 // 记录当前已经移动的距离
        }
    }

    componentDidMount () {
        this.sunProgress = ReactDOM.findDOMNode(this.ref.sunProgress)
        this.sunProgressInner = ReactDOM.findDOMNode(this.ref.sunProgressInner)
        this.bindEvents()
    }

    componentWillReceiveProps (nextProps) {
        if(!this.state.status && nextProps.percent !== this.props.percent) {
            this.setState({
                offsetWidth : this.sunProgress.clientWidth * nextProps.percent
            })
        }
    }

    componentWillUnmount () {
        this.unbindEvents()
    }

    //添加绑定事件
    bindEvents () {
        document.addEventListener('mousemove', this.barMove)
        document.addEventListener('mouseup', this.barUp)

        document.addEventListener('touchMove', this.barMove)
        document.addEventListener('touchend', this.barUp)
    }

    //移除绑定事件
    unbindEvents () {
        document.removeEventListener('mousemove', this.barMove)
        document.removeEventListener('mouseup', this.barUp)

        document.removeEventListener('touchmove', this.barMove)
        document.removeEventListener('touchend', this.barUp)
    }

    //点击事件
    barClick = e => {
        let rect = this.sunProgress.getBoundingClientRect()
        let offsetWidth = Math.min(rect.width, Math.max(0, e.clientX - rect.left))
        this.setState({offsetWidth})
        if(this.props.dragEnd) {
            this.props.dragEnd(offsetWidth / this.sunProgress.clientWidth)
        }
    }

    //鼠标、触摸开始事件
    barDown = e => {
        this.setState({
            status : true,
            startX : e.clientX || e.touches[0].pageX,
            left : this.sunProgress.clientWidth
        })
    }

    //鼠标/触摸移动事件
    barMove = e => {
        if(this.state.status) {
            let endX = e.clientX || e.touches[0].pageX, dist = endX - this.state.startX
            let offsetWidth = Math.min(this.mmProgress.clientWidth, Math.max(0, this.state.left + dist))
            this.setState({offsetWidth})
        }
    }

    //鼠标/触摸释放事件
    barUp = () => {
        // 避免打开Playing组件时触发
        if(this.state.status) {
            this.setState({
                status : false
            })
            if(this.props.dragEnd) {
                this.props.dragEnd(this.state.offsetWidth / this.sunProgress.clientWidth)
            }
        }
    }

    render () {
        const {offsetWidth} = this.state
        return (
            <div className="sunProgress" ref="sunProgress" onClick={this.barClick}>
                <div className="sunProgress-bar" />
                <div className="sunProgress-outer" ref="sunPercentProgress" />
                <div className="sunProgress-inner" ref="sunProgressInner" style={{width : `${offsetWidth}px`}}>
                    <div className="sunProgress-dot" onMouseDown={this.barDown} onTouchStart={this.barDown} />
                </div>
            </div>
        )
    }
}

export default progress
