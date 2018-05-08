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

    render() {
        const {data, isLoading} = this.props;
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>
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