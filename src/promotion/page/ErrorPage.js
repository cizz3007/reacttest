import React from 'react';
import {Link} from 'react-router-dom';
import Head from "../head/Head";
import * as styles from './ErrorPage.scss';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className={styles['error-section']}>
                <div>
                    <div className={styles['error-section-type']}>
                        <h3>404ERROR</h3>
                    </div>
                    <a href="/" className={styles['__link-return-home']}></a>
                </div>
                <img src={require('./404-littleone-graphic@2x.png')} alt="404 ERROR"/>
            </div>
        )
    }
}

export default ErrorPage;