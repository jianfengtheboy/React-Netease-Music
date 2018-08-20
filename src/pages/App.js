import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


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
