import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './sunHeader.scss';

//header组件
const SunHeader = props => {
    const showHeader = /music|discover|video/.test(props.location.pathname)
    const open = function sunHeaderOpenDrawer() {
        props.onOpen(true)
    }
    const openSearch = function sunHeaderOpenDrawer() {
        props.history.push('./search')
    }
    return (
        showHeader && (
			<header className="sun-header">
				<div className="sun-header-left" onClick={open} />
				<div className="sun-header-title">
					{/*<NavLink className="sun-header-item music" to="/music"/>*/}
					<NavLink className="sun-header-item discover" to="/discover" />
					{/*<NavLink className="sun-header-item video" to="/video"/>*/}
				</div>
				<div className="sun-header-right" onClick={openSearch} />
			</header>
		)
    )
}

export default withRouter(SunHeader)
