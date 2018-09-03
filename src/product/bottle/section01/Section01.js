import React from 'react';
import * as styles from './Section01.scss';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section01 extends React.Component {
    render() {
        return (
            <div className={cx(styles['first-section'], 'section','active')}>
                <div className={styles['first-section--txt']}>
                    <div className={styles['first-section--txt__title']}>
                        <Link to={'/smartpeepee'}>
                            <h1>SMART BOTTLE</h1>
                        </Link>
                    </div>
                    <p>Track feedings<br/>
                        Warm milk<br/>
                        Tilt warning and more</p>
                </div>
                <div className={styles['first-section--bottle']}>스마트 보틀 이미지입니다.</div>
            </div>
        )
    }
}

export default Section01;