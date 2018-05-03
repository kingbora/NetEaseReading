/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import axios from 'axios';

export function get(url, params = '') {
    if (params)
        return axios(url);
    return axios(url, {params: params})
}

export function post(url, params) {
    return axios.post(url, params);
}