/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import { all, fork } from 'redux-saga/effects';
// import appSagas from "./App/saga";
import homeSagas from './Container/LeadReading/saga';
import articleSagas from './Container/LeadReading/DetailPage/saga';

export default function* rootSaga() {
    yield all([
        fork(homeSagas),
        fork(articleSagas)
    ])
}