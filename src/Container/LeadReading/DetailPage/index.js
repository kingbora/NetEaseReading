/**
 * Created by wenbo.kuang on 2018/5/3.
 */
import React, { Component } from 'react';
import Page from "../../../Component/Page";

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page>
                <header>
                    <div data-role="center">书评正文</div>
                </header>
                <article>
                    <p>1234</p>
                </article>
            </Page>
        )
    }
}