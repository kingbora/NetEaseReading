/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import { handleActions } from 'redux-actions';
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    FETCH_END
} from './constants';

const initialState = {
    isLoading: false,
    data: []
};

export const homeReducer = handleActions({
    [FETCH_START]: (state, action) => {
        return Object.assign({}, state, {
            isLoading: true
        })
    },
    [FETCH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, {
            data: action.payload
        })
    },
    [FETCH_ERROR]: (state, action) => {
        return Object.assign({}, state, {
            msg: action.payload
        })
    },
    [FETCH_END]: (state, action) => {
        return Object.assign({}, state, {
            isLoading: false
        })
    }
}, initialState);
