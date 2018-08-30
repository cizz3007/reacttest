import React from 'react';
import {Link} from 'react-router-dom';
import Head from "../head/Head";
import * as styles from './ErrorPage.scss';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className={styles['error-section']}>
                <Head title={'404Error - '}/>
                <div>
                    <Link to={"/"} className={styles['logo']}>
                        <img src={require('./litttlone-logo.svg')}/>
                    </Link>
                    <div className={styles['error-container']}>
                        <img src={require('./404-icn-warning-sign@2x.png')} className={styles['warn-icon']}/>
                        <p>404 ERROR</p>
                    </div>
                </div>
                <img src={require('./404-littleone-graphic@2x.png')} className={styles['little-one-graphic']}/>
            </div>
        )
    }
}

export default ErrorPage;