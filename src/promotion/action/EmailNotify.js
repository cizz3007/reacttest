import axios from 'axios';
import qs from 'querystring';

export default function EmailNotify(e) {

    var inputEle = e.target.previousSibling;
    var inputVal = inputEle.value;
    let data = qs.stringify({
        email: inputVal
    });
    /*cors문제 해결..*/
    axios.post('http://littleones.kr/notify_email', data, {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
    }).then(function (response) {
        console.log(response)
    }).catch(function (error) {
        console.log(error)
    });
}