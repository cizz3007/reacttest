import React from 'react';
import styles from './OtherProduct.scss';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

class OtherProduct extends React.Component {
    render() {
        return (
            <div className={cx(styles['other-product-section'], 'section')}>
                <div className={styles['other-product-section--desc']}>
                    <div>
                        <h2>SMART SERIES</h2>
                    </div>
                    <h1>다른 제품 둘러보기</h1>
                </div>
                <div className={styles['other-product-section--products']}>
                    <div className={styles['pee-pee']}>
                        <div className={styles["other-product-section--products--image"]}></div>
                        <h5>스마트 피피<br/>(배변 알리미)</h5>
                        <p>유아의 배변활동을 감지하여<br/>
                            한 눈에 알아볼 수 있는<br/>
                            배변 리포트를 제공합니다.</p>
                        <Link to={'/smartpeepee'}>
                            <button type={'button'} role={'button'}>둘러보기</button>
                        </Link>                    </div>
                    <div className={styles['bottle']}>
                        <div className={styles["other-product-section--products--image"]}></div>
                        <h5>스마트 보틀<br/>(젖병)</h5>
                        <p>온도, 수유자세 등을 감지하여<br/>
                            한 눈에 알아볼 수 있는<br/>
                            수유 리포트를 제공합니다.</p>
                        <Link to={'/smartbottle'}>
                            <button type={'button'} role={'button'}>둘러보기</button>
                        </Link>                    </div>
                    <div className={styles['temp']}>
                        <div className={styles["other-product-section--products--image"]}></div>
                        <h5>스마트 템프<br/>(체온계)</h5>
                        <p>유아의 체온을 감지하여<br/>
                            한 눈에 알아볼 수 있는<br/>
                            체온변화 리포트를 제공합니다.</p>
                        <Link to={'/smarttemp'}>
                            <button type={'button'} role={'button'}>둘러보기</button>
                        </Link>
                    </div>
                </div>


            </div>
        )
    }
}

export default OtherProduct;