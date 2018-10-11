import React from 'react';
import * as styles from "./Section06.scss";
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section06 extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps
    }

    render() {
        let language = this.props.language;
        return (
            <div className={cx(styles['sixth-section'], 'section')}>
                <div className={styles['sixth-section--desc']}>
                    <div>
                        <h2>PRODUCT DETAILS</h2>
                    </div>
                    <h1>{language.smartpeepee.section06['00']}<br/>
                        {language.smartpeepee.section06['01']}
                    </h1>
                    <p>{language.smartpeepee.section06['02']}<br/>
                        {language.smartpeepee.section06['03']}</p>
                </div>
                <div className={styles['sixth-section--bottle-image']}></div>
                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['sensor'])}>
                    <div>
                        <em>{language.smartpeepee.section06['04']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['proof'])}>
                    <div>
                        <em>{language.smartpeepee.section06['05']}</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
                <div className={cx(styles['sixth-section--float-txt'], styles['right'], styles['material'])}>
                    <div>
                        <em>{language.smartpeepee.section06['06']}</em>
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