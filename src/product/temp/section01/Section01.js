import React from 'react';
import styles from './Section01.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section01 extends React.Component {
    render() {
        return (
            <div className={cx(styles['first-section'], 'section', 'active')}>
                <div className={styles['first-section--txt']}>
                    <div className={styles['first-section--txt__title']}>
                        <h1>SMART BOTTLE</h1>
                    </div>
                    <p>Thermometer Band<br/>
                        Monitoring, Alerts<br/>
                        & Analysis</p>
                </div>
                <div className={styles['first-section--temp']}>SMART TEMP - Thermometer Band Monitoring, Alerts & Analysis
                </div>
            </div>
        )
    }
}

export default Section01;