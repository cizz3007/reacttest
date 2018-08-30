import React from 'react';
import EmailNotify from "../action/EmailNotify";
import * as styles from './Button.scss';

class Button extends React.Component {
    render() {
        return (
            <div className={styles['primary-button']}>
                <input type={'email'} name={'email'} maxLength={60}/>
                <button onClick={EmailNotify} role={'button'}>서버 론칭시 이메일로 알려드림</button>
            </div>
        )
    }
}

export default Button;