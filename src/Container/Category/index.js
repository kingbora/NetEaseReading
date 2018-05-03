/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';

export default class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}