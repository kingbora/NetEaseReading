/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import { combineReducers } from 'redux';
// import {appReducer} from "./App/reducers";
import {homeReducer} from "./Container/LeadReading/reducers";
import {articleReducer} from "./Container/LeadReading/DetailPage/reducers";

export default function createReducer(asyncReducers) {
    return combineReducers({
        ...asyncReducers,
        homeReducer: homeReducer,
        articleReducer: articleReducer
    });
}