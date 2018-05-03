/**
 * Created by wenbo.kuang on 2018/4/28.
 */
import React, { Component } from 'react';
import styles from './style.scss';

import back from './images/back.svg';

export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    back() {

    }

    render() {
        let toolbar__content = [
            (<div key={1} className={styles.toolbar__left}>
                <span className={styles.toolbar__backButton}>
                    <img className={styles.toolbar__back_icon} src={back} />
                </span>
            </div>),
            (<div key={2} className={styles.toolbar__center}> </div>),
            (<div key={3} className={styles.toolbar__right}> </div>)
        ];
        let page__content = [];
        let children = this.props.children;

        children.map((el, index) => {
            if (el.type === "header") {
                let arr = el.props.children;
                arr.map((elm, indx) => {
                    switch (elm.props['data-role']) {
                        case "left":
                            toolbar__content[0] = (<div key={index+indx} className={styles.toolbar__left}>{elm.props.children}</div>);
                            break;
                        case "center":
                            toolbar__content[1] = (<div key={index+indx} className={styles.toolbar__center}>{elm.props.children}</div>);
                            break;
                        case "right":
                            toolbar__content[2] = (<div key={index+indx} className={styles.toolbar__right}>{elm.props.children}</div>);
                    }
                });
            } else if (el.type === "article") {
                page__content.push(el.props.children);
            }
        });

        return (
            <div className={styles.page}>
                <div className={styles.page__toolbar} data-role="border-bottom">
                    {toolbar__content}
                </div>
                <div className={styles.page__content}>
                    {page__content}
                </div>
            </div>
        );
    }
}