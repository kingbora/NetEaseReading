/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import { put, call, takeEvery } from 'redux-saga/effects';
import { get } from '../../../Api';
import config from '../../../Config';
import {
    fetchStart,
    fetchEnd,
    fetchSuccess,
    fetchError
} from "./actions";
import {
    FETCH_ARTICLE
} from './constants';

function* getArticleDetail(params) {
    yield put(fetchStart());
    try {
        const url = config.base + "/getArticle?id=" + params.payload;
        const response = yield call(get, url);
        yield put(fetchSuccess(response.data));
    } catch (err) {
        yield put(fetchError(err));
    } finally {
        yield put(fetchEnd());
    }
}

export default function* articleSagas() {
    yield takeEvery(FETCH_ARTICLE, getArticleDetail);
}