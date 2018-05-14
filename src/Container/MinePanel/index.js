/**
 * Created by wenbo.kuang on 2018/4/26.
 */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import styles from './style.scss';
import defaultPortrait from './default.png';
import Register from "../Register";

export default class MinePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sex: 0
        };

        this.renderToolbar = this.renderToolbar.bind(this);
    }

    loginOrRegister() {
        window.globalNavigator.pushPage({
            key: 'MinePanel/Register',
            component: Register,
            animation: 'lift'
        });
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className="right" onClick={this.loginOrRegister}>登陆注册</div>
            </Ons.Toolbar>
        )
    }

    render() {
        return (
            <Ons.Page id={styles.customPage} renderToolbar={this.renderToolbar}>
                <div className={styles.personalHeader}>
                    <div className={styles.defaultPortrait}>
                        <img src={defaultPortrait} />
                        <sup className={this.state.sex === 0 ? styles.female : styles.male}>
                            <Ons.Icon icon={this.state.sex === 0 ? 'ion-female' : 'ion-male'} />
                        </sup>
                    </div>
                    <div className={styles.userName}>提子</div>
                    <Ons.Row className={styles.userCountMsg}>
                        <Ons.Col>
                            <Ons.Row className={styles.contentStyle}>0分钟</Ons.Row>
                            <Ons.Row className={styles.descriptionStyle}>读书时长</Ons.Row>
                        </Ons.Col>
                        <Ons.Col width="1px" className={styles.lineStyle}> </Ons.Col>
                        <Ons.Col>
                            <Ons.Row className={styles.contentStyle}>0</Ons.Row>
                            <Ons.Row className={styles.descriptionStyle}>蜗牛壳</Ons.Row>
                        </Ons.Col>
                    </Ons.Row>
                </div>
                <Ons.List modifier="noborder">
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-email-outline" />
                        </div>
                        <div className="center">我的消息</div>
                        <div className="right">
                            <sub className={styles.messageCount}>17</sub>
                        </div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">我的共读</div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-chatbubble-outline" />
                        </div>
                        <div className="center">我的书评</div>
                        <div className="right">收藏、创作都在这里</div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">我的回答</div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">我的共读</div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">我的批</div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">账户余额·充值</div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">购买时长</div>
                        <div className="right">
                            <span className={styles.reverseBuy}>恢复购买</span>
                        </div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">邀请好友·兑换时长</div>
                        <div className="right">各得1天</div>
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-gear-outline" />
                        </div>
                        <div className="center">设置</div>
                    </Ons.ListItem>
                </Ons.List>
            </Ons.Page>
        )
    }
}