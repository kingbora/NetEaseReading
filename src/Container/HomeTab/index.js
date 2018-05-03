/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import TabControl from "../../Component/TabControl";
import LeadReading from "../LeadReading";
import Category from "../Category";
import MinePanel from "../MinePanel";
import ReadingDesk from "../ReadingDesk";

export default class HomeTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TabControl position="bottom">
                <LeadReading name="领读" icon="desk" ricon="desk-o"/>
                <Category name="分类" icon="category" ricon="category-o"/>
                <ReadingDesk name="书桌" icon="books" ricon="books-o"/>
                <MinePanel name="我的" icon="user" ricon="user-o"/>
            </TabControl>
        )
    }
}