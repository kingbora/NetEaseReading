/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import ListCard from "../../Component/ListCard";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchCardList} from "./actions";
import DetailPage from "./DetailPage";
import styles from './style.scss';

class LeadReading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 'initial'
        };

        this.toListDetail = this.toListDetail.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.getContent = this.getContent.bind(this);
        this.loadNext = this.loadNext.bind(this);
    }

    componentDidMount() {
        this.props.getCardList();
    }

    toListDetail(index) {
        const item = this.props.data[index];
        window.globalNavigator.pushPage({
            key: 'Navigation/DetailPage',
            component: DetailPage,
            hasBackButton: true,
            data: {
                title: item.title,
                avatar: item.avatar,
                username: item.username
            }
        });
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className="center">领读</div>
                <div className="right">写书评</div>
            </Ons.Toolbar>
        )
    }

    handleChange(e) {
        this.setState({
            state: e.state
        });
    }

    //下拉刷新
    handleLoad(done) {
        setTimeout(() => {
            console.log(123);
            done();
        }, 500);
    }

    getContent() {
        switch (this.state.state) {
            case "initial":
                return "Pull to refresh";
            case "preaction":
                return "Release";
            case "action":
                return "loadding...";
        }
    }

    //上拉加载更多
    loadNext() {
        console.log(123);
    }

    render() {
        const { data } = this.props;
        let articleContent = data.map((item, index, arr)=>{
            return (<ListCard key={"card-list-"+index} data={item} index={index} toListDetail={this.toListDetail} openPopover={this.show} />);
        });
        return (
            <Ons.Page id={styles.leadReading} renderToolbar={this.renderToolbar} onInfiniteScroll={this.loadNext}>
                <Ons.PullHook
                    onChange={this.handleChange}
                    onLoad={this.handleLoad}
                    thresholdHeight={1000}
                >
                    {this.getContent()}
                </Ons.PullHook>
                {articleContent}
            </Ons.Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.homeReducer.isLoading,
        data: state.homeReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCardList: bindActionCreators(fetchCardList, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeadReading)