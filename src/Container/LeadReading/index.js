/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import Page from "../../Component/Page";
import ListCard from "../../Component/ListCard";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchCardList} from "./actions";
import PureRenderMixin from "react-addons-pure-render-mixin";
import DetailPage from "./DetailPage";

class LeadReading extends Component {
    constructor(props) {
        super(props);
        //shouldComponentUpdate会频繁调用，所以将繁琐的深比较改为浅比较
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.toListDetail = this.toListDetail.bind(this);
    }

    componentDidMount() {
        this.props.getCardList();
    }

    toListDetail() {
        window.globalNavigator.pushPage({
            title: 'DetailPage',
            key: 'Navigation/DetailPage',
            component: DetailPage,
            duration: 0.4
        });
    }

    render() {
        const { data } = this.props;
        console.log(data);
        let articleContent = data.map((item, index, arr)=>{
            return (<ListCard key={"card-list-"+index} data={item} index={index} toListDetail={this.toListDetail} />);
        });
        return (
            <Page>
                <header>
                    <div data-role="left"> </div>
                    <div data-role="center">领读</div>
                    <div data-role="right">写书评</div>
                </header>
                <article>
                    {articleContent}
                </article>
            </Page>
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