import axios from 'axios';
import qs from 'querystring';

export default function EmailNotify(e) {

    var inputEle = document.getElementById('email-subscribe-component');
    var inputVal = inputEle.value;
    let data = qs.stringify({
        email: inputVal
    });

    if(inputVal!= null && inputVal !== undefined && typeof inputVal !== 'undefined' && inputVal !== ''){
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

    } else{
        console.log('값 입력해주세요.');
    }



}