/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import { createAction } from 'redux-actions';
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    FETCH_END,
    FETCH_CARD_LIST
} from './constants';

export const fetchStart = createAction(FETCH_START);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchEnd = createAction(FETCH_END);
export const fetchError = createAction(FETCH_ERROR);
export const fetchCardList = createAction(FETCH_CARD_LIST);