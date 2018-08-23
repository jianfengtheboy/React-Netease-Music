import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import asyncComponent from '../common/asyncComponent'
import Drawer from '../base/drawer/drawer'
import SunHeader from '../components/sunHeader/sunHeader'
import Player from '../components/player/player'
import Menu from '../components/menu/menu'

const Discover = asyncComponent(() => import('../pages/discover/discover'))
const Search = asyncComponent(() => import('../pages/search/search'))
const TopList = asyncComponent(() => import('../pages/toplist/toplist'))
const PlayList = asyncComponent(() => import('../pages/playlist/playlist'))
const SheetList = asyncComponent(() => import('../pages/sheetlist/sheetlist'))
const Skin = asyncComponent(() => import('../pages/skin/skin'))

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawer: false
        }
    }

    openDrawer = state => {
        this.setState({
            isDrawer : state
        })
    }

    render () {
        return (
            <Router>
                <Drawer
                    className="App Sun-wrapper"
                    sidebar={Menu}
                    isDrawer={this.state.isDrawer}
                    onOpen={this.openDrawer}
                >
                    <SunHeader onOpen={this.openDrawer} />
                    <main className="sun-wrapper">
                        <Switch>
                            <Route path="/discover" component={Discover} />
                            <Route path="/search" component={Search} />
                            <Route path="/toplist" component={TopList} />
                            <Route path="/playlist" component={PlayList} />
                            <Route path="/sheetlist" component={SheetList} />
                            <Route path="/skin" component={Skin} />
                            <Redirect to="/discover" />
                        </Switch>
                    </main>
                    {this.props.showPlayer && <Player />}
                </Drawer>
            </Router>
        )
    }
}

//映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
	showPlayer: state.showPlayer
})

export default connect(mapStateToProps)(App)
