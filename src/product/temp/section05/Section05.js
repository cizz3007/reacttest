import React from 'react';
import styles from './Section05.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section05 extends React.Component{
    render() {
        return (
            <div className={cx(styles['fifth-section'], 'section')}>
                <div className={styles['fifth-section--desc']}>
                    <div className={styles['fifth-section--desc--head']}>
                        <h2>PARENTING REPORTS</h2>
                    </div>
                    <h1>육아 정보를 한 눈에,<br/>
                        Health Care Report
                    </h1>
                    <p>체온 기록, 체온 변화 그래프  등 수집된 데이터를<br/>
                        언제든 쉽게 확인할 수 있습니다.</p>
                </div>
                <div className={styles['fifth-section--image']}>리틀원의 대시보드로 편리할 육아를 경험해 보세요.</div>
            </div>
        )
    }
}
export default Section05;