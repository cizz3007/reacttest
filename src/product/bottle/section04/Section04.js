import React from 'react';
import * as styles from './Section04.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section04 extends React.Component {



    shouldComponentUpdate(nextProps){
        return nextProps;
    }
    render() {
        let language = this.props.language;
        return (
            <div className={cx(styles['fourth-section'], 'section')}>
                <div className={styles['fourth-section--desc']}>
                    <div className={styles['fourth-section--integration']}>
                        <h2>APP INTEGRATION</h2>
                    </div>
                    <h1>{language.smartbottle.section04['00']}<br/>
                        {language.smartbottle.section04['01']}</h1>
                </div>
                <div className={styles['fourth-section--spec']}>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-bottle-4-icon-1@2x .png')}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>{language.smartbottle.section04['02']}</h3>
                            <p>{language.smartbottle.section04['03']}<br/>
                                {language.smartbottle.section04['04']}</p>
                        </div>
                    </div>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-bottle-4-icon-2@2x .png')}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>{language.smartbottle.section04['05']}</h3>
                            <p>{language.smartbottle.section04['06']}<br/>
                                {language.smartbottle.section04['07']}</p>
                        </div>
                    </div>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-bottle-4-icon-3@2x.png')}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>{language.smartbottle.section04['08']}</h3>
                            <p>{language.smartbottle.section04['09']}<br/>
                                {language.smartbottle.section04['10']}</p>
                        </div>
                    </div>
                </div>
                <div className={styles['fourth-section--app-image']}></div>
            </div>
        )
    }
}

export default Section04;

