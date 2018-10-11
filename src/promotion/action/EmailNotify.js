import axios from 'axios';
import qs from 'querystring';

export default function EmailNotify(props) {

    let inputEle = document.getElementById('email-subscribe-component');
    let inputVal = inputEle.value;
    let data = qs.stringify({
        email: inputVal
    });

    if (inputVal != null && inputVal !== undefined && typeof inputVal !== 'undefined' && inputVal !== '') {
        /*cors문제 해결..*/
        axios.post('http://littleones.kr/notify_email', data, {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
        }).then(function (response) {
            console.log(response);
            if (response.data === 'success') {
                alert('thank you for subscribing');
                inputEle.setAttribute('placeholder','Thank you');
            } else{
                alert("wrong email");
                inputEle.setAttribute('placeholder','Please enter your email');
            }
        }).catch(function (error) {
            console.log(error)
            alert(error);
        });

    } else {
        console.log('값 입력해주세요.');
    }


}