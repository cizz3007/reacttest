import React from 'react';
import * as styles from './Section02.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section02 extends React.Component {

    constructor(props) {
        super(props);
    }





    render() {
        let language = this.props.language;
        return (
            <div className={cx(styles['second-section'], 'section')}>
                <div className={styles['second-section-desc']}>
                    <div className={styles['second-section-desc--sub']}>
                        <h2>{language.smartbottle.section02['00']}</h2>
                    </div>
                    <h1 className={styles['second-section-desc--title']}>{language.smartbottle.section02['01']}<br/> {language.smartbottle.section02['02']}</h1>
                    <p className={styles['second-section-desc--paragraph']}>{language.smartbottle.section02['03']}<br/> {language.smartbottle.section02['04']}</p>
                </div>
                <div className={styles['second-section-spec']}>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-1@2x.png')} alt={'자동 보온'} width={"auto"} height={"auto"}/>
                        <div>
                            <h3>{language.smartbottle.section02['05']}</h3>
                            <p>{language.smartbottle.section02['06']}</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-2@2x.png')} alt={'자동 보온'} width={"auto"} height={"auto"}/>
                        <div>
                            <h3>{language.smartbottle.section02['07']}</h3>
                            <div>
                                <p>{language.smartbottle.section02['08']}
                                    {language.smartbottle.section02['09']}
                                    {language.smartbottle.section02['10']}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-3@2x.png')} alt={'자동 보온'} width={"auto"} height={"auto"}/>
                        <div>
                            <h3>{language.smartbottle.section02['11']}</h3>
                            <p>{language.smartbottle.section02['12']}
                                {language.smartbottle.section02['13']}
                                {language.smartbottle.section02['14']}</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-4@2x.png')} alt={'자동 보온'} width={"auto"} height={"auto"}/>
                        <div>
                            <h3>{language.smartbottle.section02['15']}</h3>
                            <p>{language.smartbottle.section02['16']}
                                {language.smartbottle.section02['17']}
                                {language.smartbottle.section02['18']}</p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Section02;