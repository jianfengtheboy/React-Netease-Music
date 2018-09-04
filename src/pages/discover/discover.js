import React , {Component} from 'react'
import {Link} from 'react-router-dom'

import Slide from '../../base/slide/slide'
import Loading from '../../base/loading/loading'
import Scroll from '../../base/scroll/scroll'
import ColumnList from '../../base/columnList/columnList'

import { getBanner, getPersonalized } from '../../api/index'
import { HTTP_OK } from '../../common/config'
/*import { formatPlayListMin } from '../../model/playlist'*/
