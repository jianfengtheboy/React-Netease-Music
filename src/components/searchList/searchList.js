import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import classNames from 'classnames'
import {connect} from 'react-redux'

import BaseSongList from '../../base/songlist/songlist'
import RowList from '../../base/rowList/rowList'
import Loading from '../../loading/loading'

import {addPlay} from '../../store/actions'
import {search, getMusicDetail} from '../../api/index'
import {HTTP_OK} from '../../common/config'
import formatSongs from '../../model/song'
import formatPlayList from '../../model/playlist'

import './searchList.scss'

//搜索列表组件
class SearchList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabData : [
                {
                    title : '单曲',
                    type : 1
                },
                {
                    title : '歌单',
                    type : 1000
                }
            ], //tab数据
            type : 1, //选中的type
            songs : [], //搜索的歌曲
            playlists : [], //搜索的歌单
            loading : true
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.query !== this.props.query) {
            this.setState({songs : [], playlists : [], loading : true})
            this.search(nextProps.query, this.state.type)
        }
    }

    shouldComponentUpdate(newProps, newState) {
        if(newProps.query && newState.type !== this.state.type) {
            this.search(newProps.query, newState.type)
        }
        return true
    }

    //播放歌曲
    addPlay = (id, index) => {
        getMusicDetail(id).then(res => {
            if(res.data.code === HTTP_OK) {
                let music = this.state.songs[index]
                music.image = res.data.songs[0].al.picUrl
                this.props.addPlay(music)
            }
        })
    }

    //跳转歌单
    openPlayList = id => {
        this.props.history.push({pathname : `/playlist/${id}`})
    }

    //切换tab
    toggleTab = (type) => {
        if(this.state.songs.length === 0 || this.state.playlists.length ===0) {
            this.setState({loading : true, type})
        }else{
            this.setState({type})
        }
    }

    //搜索事件
}

