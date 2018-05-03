/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import styles from './style.scss';
import Icon from "../Icon";

export default class ListCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data, index } = this.props;
        return (
            <div className={styles.list__card}>
                <div className={styles.card__header}>
                    <a href="javascript:;">
                        <img src={data.avatar} />
                        <span>{data.username}</span>
                    </a>
                    <span>&times;</span>
                </div>
                <div className={styles.img__holder}>
                    <img src={data.holder} />
                </div>
                <div className={styles.card__content}>
                    <h3 className={styles.card__content_title}>{data.title}</h3>
                    <p className={styles.card__content_wrap}>
                        {data.content}
                    </p>
                </div>
                <div className={styles.card__bottom}>
                    <div className={styles.card_bottom_left}>
                        {data.hot}点击 · {data.books}本书
                    </div>
                    <div className={styles.card_bottom_right}>
                        {data.star}
                        <Icon type="support" />
                    </div>
                </div>
            </div>
        )
    }
}