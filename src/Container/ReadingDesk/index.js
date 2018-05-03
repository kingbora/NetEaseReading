/**
 * Created by wenbo.kuang on 2018/4/26.
 */
import React, { Component } from 'react';

export default class ReadingDesk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}