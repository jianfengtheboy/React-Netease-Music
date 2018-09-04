import React from 'react'
import PropTypes from 'prop-types'
import { widthRouter } from 'react-router-dom'

import './sunNav.scss'

//页面导航栏组件
const SunNav = (props) => {
    const {title = '歌单', history} = props
    return (
        <nav className="sun-nav">
            <div className="sun-nav-left" onClick={history.goBack} />
            <div className="sun-nav-title">{title}</div>
            <div className="sun-nav-right"/>
        </nav>
    )
}

SunNav.propTypes = {
    title : PropTypes.string //标题
}

export default widthRouter(SunNav)
