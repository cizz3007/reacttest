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

/*쿠키 얻기*/
export function setCookie(cookie_name, value, days) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정
    let cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
}

export function getCookie(cookie_name) {
    let x, y;
    let val = document.cookie.split(';');

    for (let i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf('='));
        y = val[i].substr(val[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
        if (x == cookie_name) {
            return unescape(y); // unescape로 디코딩 후 값 리턴
        }
    }
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


