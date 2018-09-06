import React, {Component} from 'react'

import Loading from '../../base/loading/loading'
import SunNav from '../../components/sunNav/sunNav'
import Scroll from '../../base/scroll/scroll'
import ColumnList from '../../base/columnList/columnList'

import { getTopPlayList } from '../../api/index'
import { HTTP_OK } from '../../common/config'
import formatPlayList from '../../model/playlist'

import './sheetlist.scss'

//歌单页面
class SheetList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading : false,
            options : {
                pullUpLoad : true,
                probeType : 2
            },
            page : 0,
            data : []
        }
    }

    componentDidMount () {
        this.setState({
            loading : true
        })
        this._getTopPlayList()
    }

    //获取歌单
    _getTopPlayList () {
        getTopPlayList(this.state.page).then(res => {
            if(res.data.code === HTTP_OK) {
                const data = this.state.data, page = this.state.page + 1
                this.setState({
                    data : data.concat(formatPlayList(res.data.playlists)),
                    loading : false,
                    page
                })
            }
        })
    }

    //上拉加载
    pullUpLoad = () => {
        this.setState({
            loading : true
        })
        this._getTopPlayList()
    }

    render () {
        const {loading, options, data} = this.state
        return (
            <div className="sheetlist sun-wrapper">
                <SunNav />
                <Scroll className="sun-content" options={options} pullUpLoad={this.pullUpLoad}>
                    <ColumnList list={data} onItemClick={id => this.props.history.push(`/playlist/${id}`)} />
                    <Loading show={loading} />
                </Scroll>
            </div>
        )
    }
}

export default SheetList
