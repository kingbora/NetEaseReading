/**
 * Created by wenbo.kuang on 2018/4/25.
 */
//使用Symbol保证全局唯一性
export const FETCH_START = Symbol("FETCH_START");
export const FETCH_SUCCESS = Symbol("FETCH_SUCCESS");
export const FETCH_ERROR = Symbol("FETCH_ERROR");
export const FETCH_END = Symbol("FETCH_END");
export const FETCH_CARD_LIST = Symbol("FETCH_CARD_LIST");