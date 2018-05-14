/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import styles from './style.scss';
import icon_mail from './mail.svg';
import icon_qq from './qq.svg';
import icon_wechat from './wechat.svg';
import icon_weibo from './weibo.svg';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
    }

    back() {
        window.globalNavigator.popPage();
    }

    componentDidMount() {
        const clockDOM = this.refs.drawClock;
        const ctx = clockDOM.getContext("2d");
        this.drawClock(ctx, clockDOM.width);
    }

    drawClock(ctx, size) {
        ctx.clearRect(0, 0, size, size);
        const now = new Date();
        const sec = now.getSeconds();
        const min = now.getMinutes();
        const hour = now.getHours();

        //虚线圆
        ctx.lineWidth = 0.5;
        ctx.setLineDash([12, 5]);
        ctx.strokeStyle = "#9f9f9f";
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - 30, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        //表盘
        ctx.setLineDash([]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#808080";
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 6, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        //太阳
        ctx.fillStyle = "#FBE59C";
        ctx.beginPath();
        ctx.arc(40, 40, 12, 0 , 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        //绘制月亮


    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className="left">
                    <Ons.Icon icon="ion-close-round" onClick={this.back} />
                </div>
            </Ons.Toolbar>
        )
    }

    render() {
        return (
            <Ons.Page id={styles.register} renderToolbar={this.renderToolbar}>
                <div className={styles.page__inner}>
                    <div className={styles.loginWrap}>
                        <h3>免费</h3>
                        <p>每天免费阅读1小时</p>
                        <canvas className={styles.canvasStyles} ref="drawClock" width="240px" height="240px">

                        </canvas>
                        <Ons.Button className={styles.loginButton}>网易手机账号</Ons.Button>
                        <div className={styles.shareTool}>
                            <span>
                                <img src={icon_mail} />
                            </span>
                                <span>
                                <img src={icon_weibo} />
                            </span>
                                <span>
                                <img src={icon_wechat} />
                            </span>
                                <span>
                                <img src={icon_qq} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.bottomProtocol}>
                        <p>完成登录即代表您已阅读</p>
                        <p>并同意“<a href="javascript:;">服务条款</a>”和“<a href="javascript:;">隐私条款</a>”</p>
                    </div>
                </div>
            </Ons.Page>
        )
    }
}