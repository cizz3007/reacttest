import React from 'react';
import * as styles from './Section02.scss';

class Section02 extends React.Component{
    render(){
        return(
            <section className={styles["secondary-section"]}>
                <div className={styles['secondary-section--content']}>
                    <div className={styles['secondary-section--content--head']}>
                        <div className={styles['outer']}>
                            <div className={styles['inner']}>
                                <div className={styles['centered']}>
                                    <h1>Littleone</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>offers the next level parenting solution through IoT devices and app integration, utilizing cutting-edge technology.</p>
                </div>
            </section>
        )
    }
}

export default Section02;