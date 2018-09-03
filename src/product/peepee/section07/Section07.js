import React from 'react';
import * as styles from './Section07.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section07 extends React.Component {
    render() {
        return (
            <div className={cx(styles['seventh-section'], 'section')}>
                <div className={styles['seventh-section--desc']}>
                    <div className={styles['seventh-section--desc--app-integration']}>
                        <h2>PRODUCT DETAIL</h2>
                    </div>
                    <h1>
                        벨크로 방식으로<br/>
                        간편하게
                    </h1>
                    <p>
                        패치에 부착해 기저귀 종류에 관계없이 사용할 수 있습니다.
                    </p>
                </div>
                <div className={styles['seventh-section--bottle-image']}>
                    스마트보틀의 하단 이미지부분 입니다.
                </div>
            </div>
        )
    }
}

export default Section07;