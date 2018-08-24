import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Notice from './notice'

let seed = 0
const now = Date.now()

function getUuid() {
    return `sNotification_${now}_${seed++}`
}

class Notification extends Component {
    static PropTypes = {
        prefixCls : PropTypes.string,
        className : PropTypes.string
    }

    static defaultProps = {
        prefixCls : 'sun-notification'
    }

    constructor(props) {
        super(props)
        this.state => {
            notices : [], // 存储当前有的notices
            hasMask : true //是否显示蒙版
        }
    }

    //添加 notice
    add = notice => {
        const { notices } = this.state
        const key = (notice.key = notice.key || getUuid()) //生成唯一的key
        const temp = notices.filter(item => item.key === key).length
        if(!temp) {
            this.setState(prevState => {
                return {
                    notices : prevState.notices.concat(notice)
                }
            })
        }
    }

    //根据key 移除notice
    remove = key => {
        this.setState(prevState => {
            return {
                notices : prevState.notices.filter(notice => notice.key !== key)
            }
        })
    }

    render() {
        const { notices } = this.state
        const props = this.props
        const noticeNodes = notices.map(notice => {
            const closeFun = () => {
                this.remove(notice.key)
                //如果有用户传入的onClose执行
                if(notice.onClose) notice.onClose()
            }
            return (
                <Notice {...notice} onClose={closeFun}>
                    {notice.content}
                </Notice>
            )
        })
        return <div className={classNames(props.prefixCls, props.className)}>{noticeNodes}</div>
    }
}

//动态添加到页面中和重写
Notification.newInstance = function newNotificationInstance(properties, callback) {
    const { ...props } = properties || {}
    let div
    if(!div) {
        div = document.createElement('div')
        document.body.appendChild(div)
    }
    let called = false
    function ref(notification) {
        if(called) {
            return
        }
        called = true
        callback ({
            notice(noticeProps) {
                notification.add(noticeProps)
            },
            removeNotice(key) {
                notification.remove(key)
            },
            component : notification,
            destory() {
                ReactDOM.unmountComponentAtNode(div)
                document.body.removeChild(div)
            }
        })
    }
    ReactDOM.render(<Notification {...props} ref={ref} />, div)
}

export default Notification
