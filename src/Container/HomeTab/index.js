/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import LeadReading from "../LeadReading";
import Category from "../Category";
import MinePanel from "../MinePanel";
import ReadingDesk from "../ReadingDesk";
import styles from './style.scss';

export default class HomeTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };

        this.renderTabs = this.renderTabs.bind(this);
    }

    renderTabs() {
        return [
            {
                content: <LeadReading key="tab_content/lead_reading" />,
                tab: <Ons.Tab key="tabs/lead_reading" label="领读" icon='ion-ios-home' />
            },
            {
                content: <Category key="tab_content/category" />,
                tab: <Ons.Tab key="tabs/category" label="分类" icon='ion-grid' />
            },
            {
                content: <ReadingDesk key="tab_content/reading_desk" />,
                tab: <Ons.Tab key="tabs/reading_desk" label="书桌" icon='ion-cube' />
            },
            {
                content: <MinePanel key="tab_content/mine_panel" />,
                tab: <Ons.Tab key="tabs/mine_panel" label="我的" icon='ion-android-person' />
            }
        ]
    }

    render() {
        return (
            <Ons.Page>
                <Ons.Tabbar
                    key="home_tab"
                    swipeabel={true}
                    position='bottom'
                    index={this.state.index}
                    animation="none"
                    tabBorder={false}
                    id={styles.homeTab}
                    onPreChange={(event) => {
                        if (event.index !== this.state.index) {
                            this.setState({
                                index: event.index
                            });
                        }
                    }}
                    renderTabs={this.renderTabs}
                />
            </Ons.Page>
        )
    }
}