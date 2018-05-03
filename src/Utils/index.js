/**
 * Created by wenbo.kuang on 2018/5/3.
 */
module.exports = {
    /**
     * 判断是否为空
     * @param obj
     * @returns {boolean}
     */
    isEmpty: function (obj) {
        if (obj === undefined || obj === null || new String(obj).trim() === '') {
            return true;
        } else {
            return false;
        }
    }
};