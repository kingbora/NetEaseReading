/**
 * Created by wenbo.kuang on 2018/4/26.
 */
import React, { Component } from 'react';
import styles from './iconfont.css';

export default class Icon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            icon: this.getIcons()
        }
    }

    getIcons() {
        let icon = "";
        switch (this.props.type) {
            // icon iconfont icon-users
            case "users":
                icon = styles["icon-users"];
                break;
            case "user":
                icon = styles['icon-yonghu'];
                break;
            case "user-o":
                icon = styles['icon-yonghu-xianxing'];
                break;
            case "books":
                icon = styles['icon-shu1'];
                break;
            case "books-o":
                icon = styles['icon-shu'];
                break;
            case "category":
                icon = styles['icon-fenlei2'];
                break;
            case "category-o":
                icon = styles['icon-fenlei1'];
                break;
            case "desk":
                icon = styles['icon-order_fill'];
                break;
            case "desk-o":
                icon = styles['icon-order'];
                break;
            case "support":
                icon = styles['icon-zan'];
                break;
            case "support-o":
                icon = styles['icon-zan1'];
                break;
            case "share":
                icon = styles['icon-fenxiang'];
                break;
            case "scan":
                icon = styles['icon-saomiaoshibie380'];
                break;
            case "pen":
                icon = styles['icon-bi'];
                break;
            case "woman":
                icon = styles['icon-nvxing'];
                break;
            case "search":
                icon = styles['icon-sousuo'];
                break;
            case "comment":
                icon = styles['icon-pinglun'];
                break;
            case "email":
                icon = styles['icon-e-mail_icon'];
                break;
            case "help":
                icon = styles['icon-shuoming'];
                break;
            case "arrow-top":
                icon = styles['icon-jiantoushang'];
                break;
            case "arrow-back":
                icon = styles['icon-fanhui'];
                break;
            case "arrow-right":
                icon = styles['icon-jiantouyou'];
                break;
            case "arrow-down":
                icon = styles['icon-jiantouxia'];
                break;
            case "setting":
                icon = styles['icon-shezhi'];
                break;
            case "vip":
                icon = styles['icon-renzhengpeizhi'];
                break;
        }

        return icon;
    }

    render() {
        const className = this.props.className ? " " + this.props.className : "";
        return (
            <i className={styles['iconfont'] + " " + this.state.icon + className}> </i>
        )
    }
}