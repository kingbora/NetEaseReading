import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeTab from "../Container/HomeTab";
import Navigation from "../Component/Navigation";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    renderPage(route, navigation) {
        window.globalNavigator = navigation;

        return (
            <route.component key={route.key} navigator={navigation} route={route} ref={(node) => {
                //防止重复push
                if (!navigation.node[route.title]) {
                    navigation.node[route.title] = node;
                }
                if (route.animate !== "none") {
                    if (node) {
                        //push
                        const el = ReactDOM.findDOMNode(node);
                        el.style.left = "100%";
                        el.style.transition = `all ${route.duration}s cubic-bezier(0.3, 0.4, 0, 0.9)`;
                        setTimeout(()=>{
                            el.style.left = "0";
                        },0);
                        setTimeout(()=>{
                            const prevKey = navigation.routes[navigation.routes.length - 2].title;
                            let prevEl = ReactDOM.findDOMNode(navigation.node[prevKey]);
                            prevEl.style.display = "none";
                        }, route.duration * 1000);
                    }
                }
            }} />
        );
    }

    render() {
        return (
            <Navigation initialRoute={{
                title: 'HomeTab',
                key: 'Navigation/HomeTab',
                component: HomeTab,
                animate: 'none'
            }}
            renderPage={this.renderPage}
            >
            </Navigation>
        )
    }
}