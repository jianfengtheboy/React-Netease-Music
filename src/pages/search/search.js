import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

import SearchList from '../../components/searchList/searchList'

import {searchHot} from '../../api/index'
import {HTTP_OK} from '../../common/config'

import './search.scss'

//搜索页面