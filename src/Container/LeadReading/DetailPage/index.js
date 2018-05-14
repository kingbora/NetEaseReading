/**
 * Created by wenbo.kuang on 2018/5/3.
 */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import ReactMarkdown from 'react-markdown';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchArticle} from "./actions";
import styles from './style.scss';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.renderToolbar = this.renderToolbar.bind(this);
        this.renderBottomToolbar = this.renderBottomToolbar.bind(this);
    }

    componentDidMount() {
        this.props.getArticle(0);
    }

    renderToolbar() {
        const backButton = this.props.route.hasBackButton
            ? <Ons.BackButton> </Ons.BackButton>
            : null;
        return (
            <Ons.Toolbar>
                <div className="left">{backButton}</div>
                <div className='center'>书评正文</div>
            </Ons.Toolbar>
        )
    }

    renderBottomToolbar() {
        return (
            <Ons.BottomToolbar className={styles.bottomToolbar}>
                <Ons.Icon icon="ion-ios-undo-outline" />
                <Ons.Icon icon="ion-ios-heart-outline" />
                <Ons.Icon icon="ion-ios-chatbubble-outline" />
            </Ons.BottomToolbar>
        )
    }

    render() {
        const {data, isLoading, route} = this.props;
        const {title, avatar, username} = route.data;
        return (
            <Ons.Page id={styles.detailPage} renderToolbar={this.renderToolbar} renderBottomToolbar={this.renderBottomToolbar}>
                <h2>{title}</h2>
                <a className={styles.userStyle} href="javascript:;">
                    <img src={avatar} />
                    <span>{username}</span>
                </a>
                {
                    !isLoading &&
                    <ReactMarkdown className={styles.detail_content} source={data} />
                }
            </Ons.Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.articleReducer.isLoading,
        data: state.articleReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticle: bindActionCreators(fetchArticle, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPage)