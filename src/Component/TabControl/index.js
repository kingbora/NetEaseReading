/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React, { Component } from 'react';
import style from './style.scss';
import Icon from "../Icon";

export default class TabControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    isActive(index) {
        return this.state.currentIndex === index;
    }

    render() {
        const positionStyle = this.props.position === "bottom" ? style.tab_bottom_fixed : style.tab_top_fixed;

        return (
            <div className={style.tab}>
                <div className={style.tab_item_wrap}>
                    {
                        React.Children.map( this.props.children, (element, index) => {
                            return (
                                <div className={style.tab_item + (this.isActive(index) ? " " + style.tab_item_show : "")}>
                                    { element }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.tab_title_wrap + " " + positionStyle} data-role="border-top">
                    {
                        React.Children.map( this.props.children, ( element, index ) => {
                            return (
                                <div onClick={ () => this.setState({currentIndex: index})} className={style.tab_title + (this.isActive(index) ? " " + style.tab_title_active : "")}>
                                    {
                                        this.isActive(index) && <Icon type={element.props.icon} className={style.tab_title_icon}/>
                                    }
                                    {
                                        !this.isActive(index) && <Icon type={element.props.ricon} className={style.tab_title_icon}/>
                                    }
                                    <span>{ element.props.name }</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}