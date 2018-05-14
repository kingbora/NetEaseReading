/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from "./App";
import * as Ons from 'onsenui';

//引入onsenui样式
import '!style-loader!css-loader!onsenui/css/onsenui.css';
import '!style-loader!css-loader!onsenui/css/onsen-css-components.css';

//引入全局样式和reset样式
import './Styles/reset.css';
import './Styles/app.scss';

Ons.forcePlatformStyling("IOS");

const store = configureStore();

render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    document.getElementById("app")
);

if( module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}