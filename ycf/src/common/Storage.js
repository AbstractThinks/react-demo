//本地cookie存储服务
var cookieStorageService = (function() {
    //设置数据
    var setData = function(key, data, expire) {
        var saveData = data;
        if (!expire) {
            var Days = 365;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            expire = exp.toGMTString();
        }
        var cookieStr = key + "=" + saveData + ";expires=" + expire + ";path=/";
        document.cookie = cookieStr;
    };
    //获取数据
    var getData = function(key) {
        var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
        if (arr !== null) {
            if (saveData && saveData !== "undefined") {
                return JSON.parse(saveData);
            }
        }
        return null;
    };
    //清除数据
    var removeData = function(key) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var expire = exp.toGMTString();
        var cval = getData(key) || "";
        setData(key, cval, expire);
    };
    return {
        get: getData,
        set: setData,
        remove: removeData
    };
})();

//本地存储服务
var localStorageService = (function() {
    //设置数据
    var setData = function(key, data) {
        var saveData = JSON.stringify(data);
        window.localStorage.setItem(key, saveData);
    };
    //获取数据
    var getData = function(key) {
        var saveData = window.localStorage.getItem(key);
        if (saveData && saveData !== "undefined") {
            return JSON.parse(saveData);
        }
        return null;
    };
    //清除数据
    var remove = function(key) {
        window.localStorage.removeItem(key);
    };
    return {
        get: getData,
        set: setData,
        remove: remove
    };
})();

//会话存储服务
var sessionStorageService = (function() {
    var set = function(key, data) {
        var saveData = JSON.stringify(data);
        return window.sessionStorage.setItem(key, saveData);
    };
    var get = function(key) {
        var settings = window.sessionStorage.getItem(key);
        if (settings && settings !== "undefined") {
            return JSON.parse(settings);
        }
        return null;
    };
    var remove = function(key) {
        return window.sessionStorage.removeItem(key);
    };
    return {
        set: set,
        get: get,
        remove: remove
    };
})();

//客户端存储服务
var constantStorageService = (function() {
    var setData = function(key, data) {
        localStorageService.set(key, data);
        cookieStorageService.set(key, data);
    };
    var getData = function(key) {
        var data = localStorageService.get(key);
        if (!data) {
            data = cookieStorageService.get(key);
        }
        return data;
    };
    var removeData = function(key) {
        localStorageService.remove(key);
        cookieStorageService.remove(key);
    };
    return {
        get: getData,
        set: setData,
        remove: removeData
    };
})();


export {
    cookieStorageService,
    localStorageService,
    sessionStorageService,
    constantStorageService
}
