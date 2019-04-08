/*CSS를 변경한다.*/
export function setCss(cssSelector, props, value) {
    return document.querySelector(cssSelector).style[props] = value;
}
/*함수를 단 한번만 실행시킨다.*/
export function once(fn, context) {
    let result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

let cookieToday = new Date();
let expiryDate = new Date(cookieToday.getTime() + (365 * 86400000)); // a year

export function setCookie (name,value,expires,path,theDomain,secure) {

    value = escape(value);

    let theCookie = name + "=" + value +
        ((expires)    ? "; expires=" + expires.toGMTString() : "") +
        ((path)       ? "; path="    + path   : "") +
        ((theDomain)  ? "; domain="  + theDomain : "") +
        ((secure)     ? "; secure"            : "");

    document.cookie = theCookie;
}

export function getCookie(Name) {
    let search = Name + "=";
    if (document.cookie.length > 0) { // if there are any cookies
        let offset = document.cookie.indexOf(search);
        if (offset != -1) { // if cookie exists
            offset += search.length;
            // set index of beginning of value
            let end = document.cookie.indexOf(";", offset);
            // set index of end of cookie value
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end))
        }
    }
}

export function delCookie(name,path,domain) {
    if (getCookie(name)) document.cookie = name + "=" +
        ((path)   ? ";path="   + path   : "") +
        ((domain) ? ";domain=" + domain : "") +
        ";expires=Thu, 01-Jan-70 00:00:01 GMT";
}

export function deleteCookie(cookie_name) {
    document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function addCookie(id) {
    let items = getCookie('productItems'); // 이미 저장된 값을 쿠키에서 가져오기
    let maxItemNum = 5; // 최대 저장 가능한 아이템개수
    let expire = 7; // 쿠키값을 저장할 기간
    if (items) {
        let itemArray = items.split(',');
        if (itemArray.indexOf(id) != -1) {
            // 이미 존재하는 경우 종료
            console.log('Already exists.');
        }
        else {
            // 새로운 값 저장 및 최대 개수 유지하기
            itemArray.unshift(id);
            if (itemArray.length > maxItemNum) itemArray.length = 5;
            items = itemArray.join(',');
            setCookie('productItems', items, expire);
        }
    }
    else {
        // 신규 id값 저장하기
        setCookie('productItems', id, expire);
    }
}


