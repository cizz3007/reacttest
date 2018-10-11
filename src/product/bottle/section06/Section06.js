import React from 'react';
import * as styles from './Section06.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section06 extends React.Component {

    shouldComponentUpdate(nextProps){
        return nextProps;
    }
    render() {
        let language = this.props.language;
        return (
            <div className={cx(styles['sixth-section'], 'section')}>
                <div className={styles['sixth-section--desc']}>
                    <div>
                        <h2>PRODUCT DETAILS</h2>
                    </div>
                    <h1>{language.smartbottle.section06['00']}<br/>
                        {language.smartbottle.section06['01']}
                    </h1>
                </div>
                <div className={styles['sixth-section--bottle-image']}></div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['bottle-cap'])}>
                    <div>
                        <em>{language.smartbottle.section06['02']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['handle'])}>
                    <div>
                        <em>{language.smartbottle.section06['03']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['straw'])}>
                    <div>
                        <em>{language.smartbottle.section06['04']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['smart-base'])}>
                    <div>
                        <em>{language.smartbottle.section06['05']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['right'], styles['nipple'])}>
                    <div>
                        <em>{language.smartbottle.section06['06']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['right'], styles['glass'])}>
                    <div>
                        <em>{language.smartbottle.section06['07']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section06;