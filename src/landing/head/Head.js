import React from 'react';
import * as styles from './Head.scss';
import classNames from 'classnames'

const cx = classNames.bind(styles);


class LadingHead extends React.Component {
    render() {
        return (
            <header className={styles['header-section']}>
                <a href="/" className={styles['__link-logo']}>
                    <img src={require('./littleone-logo.png')} alt={'next level parenting littleone'}/>
                </a>
                <div className={styles['header-section--container']}>
                    <a href="mailto:smart@littleone.kr" className={cx(styles['__sns-link'], styles['email'])}>littleone's email link</a>
                    <a href="https://www.facebook.com/littleonesns"
                       className={cx(styles['__sns-link'], styles['facebook'])}>littleone's facebook link</a>
                    <a href="https://twitter.com/littleonesns"
                       className={cx(styles['__sns-link'], styles['twitter'])}>littleone's twiiter link</a>
                    <a className={cx(styles['__select-country'])} href="javascript:void(0)">
                        <div></div>
                        <span className={styles['__down-pointer']}></span>
                        <ul className={styles['country-box']}>
                            <li className={styles['country-box--link']}>
                                <span className={styles['__lang-korea']}>korea</span>
                            </li>
                            <li className={styles['country-box--link']}>
                                <span className={styles['__lang-japan']}>japan</span>
                            </li>
                            <li className={styles['country-box--link']}>
                                <span className={styles['__lang-china']}>china</span>
                            </li>
                        </ul>
                    </a>
                </div>
            </header>
        );
    }
}


export default LadingHead;
