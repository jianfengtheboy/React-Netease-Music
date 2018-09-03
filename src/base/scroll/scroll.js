import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'

import './scroll.scss'

const DEFAULT_OPTIONS = {
    observeDOM : true,
    click : true,
    probeType : 1,
    scrollbar : false,
    pullDownRefresh: false,
    pullUpLoad: false
}
