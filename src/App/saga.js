/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import { put, call, takeEvery } from 'redux-saga/effects';
import { get } from '../Api';
import config from '../Config';
import {
    fetchStart,
    fetchEnd,
    fetchSuccess,
    fetchError
} from "./actions";
import {
    FETCH_USER_INFO
} from './constants';

function* getUserInfo() {
    yield put(fetchStart);
    try {
        const url = config.base + "/getUserInfo";
        const response = yield call(get(url));
        console.log(response);
        yield put(fetchSuccess(response.data));
    } catch (err) {
        yield put(fetchError(err));
    } finally {
        yield put(fetchEnd);
    }
}

export default function* appSagas() {
    yield takeEvery(FETCH_USER_INFO, getUserInfo);
}