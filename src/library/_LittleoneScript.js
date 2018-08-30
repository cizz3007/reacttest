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

