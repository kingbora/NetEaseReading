/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import styles from './style.scss';

export default class Category extends Component {
    constructor(props) {
        super(props);

        this.width = window.innerWidth;

        this.renderToolbar = this.renderToolbar.bind(this);
        this.renderCategory = this.renderCategory.bind(this);
    }

    renderCategory() {
        const averageWidth = (this.width - 20 * 4) / 3;
        const data = [
            '上海译文', '理想国', '译林出版',
            '果麦', '磨铁', '读客',
            '小说', '青春', '漫画绘本',
            '文艺', '名著', '外文原版',
            '心理', '历史', '杜科',
            '非虚构', '生活', '传记',
            '互联网', '经管', '精进',
            '情感', '诗歌', '推理',
            '科普', '影视', '科幻'
        ];
        return data.map((val, index) => {
            return (
                <div key={"cubeCard" + index} style={{height: averageWidth + "px", width: averageWidth + "px"}} className={styles.cubeCard}>{val}</div>
            )
        });
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className="center">
                    <Ons.SearchInput
                        placeholder='Search' />
                </div>
                <div className="right">
                    <Ons.Icon icon="ion-qr-scanner" />
                </div>
            </Ons.Toolbar>
        )
    }

    render() {
        return (
            <Ons.Page id={styles.customPage} renderToolbar={this.renderToolbar}>
                <Ons.Row className={styles.rankTop}>
                    <Ons.Col className={styles.lineCard}>
                        <h1>在读榜</h1>
                        <h4>Top List</h4>
                    </Ons.Col>
                    <Ons.Col width="20px"> </Ons.Col>
                    <Ons.Col className={styles.lineCard}>
                        <h1>新书榜</h1>
                        <h4>New Release</h4>
                    </Ons.Col>
                </Ons.Row>
                <div className={styles.divided}>
                    <span>分类</span>
                </div>
                <div className={styles.cubeList}>
                    {this.renderCategory()}
                </div>
            </Ons.Page>
        )
    }
}