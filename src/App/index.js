import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import HomeTab from '../Container/HomeTab';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    renderPage(route, navigation) {
        window.globalNavigator = navigation;
        return (
            <route.component key={route.key} navigator={navigation} route={route} />
        );
    }

    render() {
        return (
            <Ons.Navigator initialRoute={{
                key: 'Navigation/HomeTab',
                component: HomeTab,
                hasBackButton: false
            }}
            renderPage={this.renderPage}
            swipeable
            />
        )
    }
}