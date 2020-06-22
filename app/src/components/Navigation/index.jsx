import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home';
import Admin from '../Admin';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentDidUpdate() {

    }

    render() {

        return (
            <div className="navigation">
                <Router>
                    <Switch>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router >
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}
const mapStateToProps = (state) => {
    return {
        // serverIsDown: state.server.isStart,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

