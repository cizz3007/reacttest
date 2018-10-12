import React from 'react';
import * as styles from './Section03.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);
class Section03 extends React.Component{
    render(){
        return(
            <section className={styles["third-section"]}>
                <ul className={styles['third-section--content']}>
                    <li className={cx(styles['third-section--content--list'], styles['health-care'])}>
                        <div>
                            <img src={require('./ic-healthcare.svg')} alt="메인페이지의 헬스케어 소개 아이콘입니다." width={"auto"} height={"auto"}/>
                                <h1>Healthcare</h1>
                                <p>You can check the health condition of your baby through data collected by IoT devices. Also, we offer parenting consultation and helpful tips through our affiliated professionals.</p>
                        </div>
                    </li>
                    <li className={cx(styles["third-section--content--list"], styles['community'])}>
                        <div>
                            <img src={require('./ic-community.svg')} alt="메인페이지의 커뮤니티 소개 아이콘입니다." width={"auto"} height={"auto"}/>
                                <h1>Community</h1>
                                <p>We provide a space where parents can freely share parenting tips or write review on baby products. Or you can simply post the pictures of your little one.</p>
                        </div>
                    </li>
                    <li className={cx(styles["third-section--content--list"], styles['shopping'])}>
                        <div>
                            <img src={require('./ic-shopping.svg')} alt="메인페이지의 쇼핑 소개 아이콘입니다." width={"auto"} height={"auto"}/>
                                <h1>Shopping</h1>
                                <p>Utilizing patented algorithm, we offer smart subscription commerce. We will deliver baby products such as diaper or formula to your doorstep and even adjust the size, step, and quantity automatically according to your baby’s needs.</p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Section03;