/**
 * Created by wenbo.kuang on 2018/4/26.
 */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import styles from './style.scss';

export default class MinePanel extends Component {
    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className="right">登陆注册</div>
            </Ons.Toolbar>
        )
    }

    render() {
        return (
            <Ons.Page id={styles.customPage} renderToolbar={this.renderToolbar}>
                <div className={styles.personalHeader}>
                    <div>
                        <img src="" />
                        <sup>nv</sup>
                    </div>
                    <div>提子</div>
                    <Ons.Row>
                        <Ons.Col>
                            <Ons.Row>0分钟</Ons.Row>
                            <Ons.Row>读书时长</Ons.Row>
                        </Ons.Col>
                        <Ons.Col width="1px"> </Ons.Col>
                        <Ons.Col>
                            <Ons.Row>0</Ons.Row>
                            <Ons.Row>蜗牛壳</Ons.Row>
                        </Ons.Col>
                    </Ons.Row>
                </div>
                <Ons.List modifier="noborder">
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-email-outline" />
                        </div>
                        <div className="center">我的消息</div>
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
                    </Ons.ListItem>
                    <Ons.ListItem modifier="chevron nodivider" tappable tapBackgroundColor="#f6f6f6">
                        <div className="left">
                            <Ons.Icon icon="ion-ios-people-outline" />
                        </div>
                        <div className="center">邀请好友·兑换时长</div>
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