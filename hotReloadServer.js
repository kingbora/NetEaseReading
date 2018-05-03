/**
 * Created by wenbo.kuang on 2018/4/25.
 */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config/config');
const ejs = require('ejs');
let app = express();
// let api = require('./routes/api.js');

app.use('/',require('connect-history-api-fallback')());
app.use('/',express.static(path.resolve(__dirname, 'public')));

app.use('/getHomeList', function(req, res, next) {
    const data = [
        {
            avatar: '/IMG_1596.jpg',
            holder: '/IMG_1590.jpg',
            username: '网易公开课',
            close: false,
            support: false,
            subtitle: '书文',
            title: '一个人开始变蠢的三种迹象，30岁前发现还不晚',
            content: '复旦大学的杨福家教授曾说：一个大学生在毕业离开大学的那天里，他在这四年里所学的知识有50%已经过时。',
            hot: 5477,
            books: 4,
            star: 257
        },
        {
            avatar: '/IMG_1597.jpg',
            holder: '/IMG_1591.jpg',
            username: '蜗牛书单',
            close: false,
            support: false,
            subtitle: '书单',
            title: '书单里的这些人，可以让你迷恋一生',
            content: '前段时间，火爆全网的综艺《偶像练习生》落下帷幕。总决赛当晚，小窝一边刷着朋友圈一边惊讶：原来我周围有这么多人看这个？',
            hot: 6565,
            books: 20,
            star: 174
        },
        {
            avatar: '/IMG_1598.jpg',
            holder: '/IMG_1592.jpg',
            username: '蜗小牛',
            close: false,
            support: false,
            subtitle: '今日上新',
            title: '百年前日本大师游完中国是怎么回去刷爆朋友圈的',
            content: '一到假期，小蜗的朋友圈就被各种旅游照疯狂刷屏，其中很多去日本游玩的盆友，一边炫耀美景，一边吐槽日本爱喝酒，时不时就撞见个醉汉！',
            hot: 5921,
            books: 7,
            star: 163
        },
        {
            avatar: '/IMG_1599.jpg',
            holder: '/IMG_1593.jpg',
            username: '龙窝里的倪纳',
            close: false,
            support: false,
            subtitle: '人物',
            title: '致琼瑶阿姨：就算过时了也不应被践踏',
            content: '这两天作家琼瑶的第三者旧闻被营销号热炒，我心里特别悲凉。我甘愿冒天下之大不韪，想为这位在我儿童时期启蒙过我文学梦想的作家说两句人微言轻的话。',
            hot: 4684,
            books: 11,
            star: 301
        },
        {
            avatar: '/IMG_1600.jpg',
            holder: '/IMG_1594.jpg',
            username: '未读君',
            close: false,
            support: false,
            subtitle: '书文',
            title: '《使女的故事》回归，女性距离自由还很远吗？',
            content: '美剧《使女的故事》从去年第一季开播以来就产生了非常热烈的反响，拿下了艾美奖、金球奖等多项大奖。',
            hot: 3291,
            books: 2,
            star: 157
        }
    ];

    res.json(data);
});


if(process.env.NODE_ENV !== 'production'){//开发环境下
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.dev');
    const webpackCompiled = webpack(webpackConfig);

    //配置运行时打包
    const webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(webpackCompiled, {
        publicPath: webpackConfig.output.publicPath
    }));

    // 配置热更新
    const webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(webpackCompiled, {
        log: false,
        heartbeat: 2000
    }));
}

const server = app.listen(config.hotReloadPort,function () {
    let port = server.address().port;
    console.log(`Open http://${config.hotReloadHost}:%s`, port);
});