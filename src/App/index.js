import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NotFound from '../Component/NotFound';
import HomeTab from "../Container/HomeTab";
import { fetchUserInfo } from './actions';
import Register from "../Container/Register";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={ HomeTab } />
                    <Route path="/register" component={ Register } />
                    <Route component={ NotFound } />
                </Switch>
            </Router>
        )
    }
}