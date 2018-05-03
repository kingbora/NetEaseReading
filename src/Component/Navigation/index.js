/**
 * Created by wenbo.kuang on 2018/5/3.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.scss';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.pages = [];
        this.routes = [];
        this.node = {};
    }

    pushPage(route, options = {}) {
        return new Promise((resolve) => {
            this.pages.push(this.props.renderPage(route, this));
            this.routes.push(route);

            this.forceUpdate(resolve);
        });
    }


    popPage() {
        return new Promise((resolve) => {
            //prev
            const prevKey = this.routes[this.routes.length - 2].title;
            let prevEl = ReactDOM.findDOMNode(this.node[prevKey]);
            prevEl.style.display = "";
            //current
            const current = this.routes[this.routes.length - 1];
            const key = current.title;
            let el = ReactDOM.findDOMNode(this.node[key]);
            el.style.left = "100%";

            setTimeout(()=>{
                this.pages.pop();
                this.routes.pop();
                this.node[key] = null;

                this.forceUpdate(resolve);
            }, current.duration * 1000);
        });
    }

    componentDidMount() {
        if (this.props.initialRoute) {
            this.routes = [this.props.initialRoute];
        }

        this.pages = this.routes.map((route) => this.props.renderPage(route, this));

        this.forceUpdate();
    }

    render() {
        const pages = this.routes ? this.routes.map((route) => this.props.renderPage(route, this)) : null;

        return (
            <nav className={styles.navigator}>
                {pages}
            </nav>
        )
    }
}

