import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

import SearchList from '../../components/searchList/searchList'

import {searchHot} from '../../api/index'
import {HTTP_OK} from '../../common/config'

import './search.scss'

//搜索页面
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value : '',
            query : '',
            type : 1,
            hots : []
        }
        searchHot().then(res => {
            if(res.data.code === HTTP_OK) {
                this.setState({
                    hots : res.data.result.hots
                })
            }
        })
    }

    searchChange = e => {
        this.setState({
            value : e.target.value
        })
    }

    onEnter = e =>{
        if(e.keyCode === 13) {
            this.setState({
                query : e.target.value
            })
        }
    }

    render () {
        const { value, query, hots } = this.state
        const { history } = this.props
        return (
			<div className="sun-wrapper search">
				<nav className="search-head">
					<div className="search-head-left" onClick={history.goBack} />
					<div className="search-head-box">
						<input className="search-head-input" type="text" placeholder="搜索你喜欢的" value={value} autoFocus="autofocus" onChange={this.searchChange} onKeyDown={this.onEnter} />
					</div>
				</nav>
				<div className="sun-wrapper">
					<SearchList query={query} />
					<div className={classNames('search-hots', { 'sun-none': query })}>
						<h1>热门搜索</h1>
						<ul>
							{hots.length > 0 &&
								hots.map((itme, index) => (
									<li className="search-hots-item"  onClick={() => {
											this.setState({ query: itme.first, value: itme.first })
										}} key={index}>
										{itme.first}
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		)
    }
}

export default withRouter(Search)
