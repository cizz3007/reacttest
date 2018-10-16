import React from 'react';
import * as styles from './Footer.scss';
import EmailSubscribe from "../../component/input/EmailSubscribe";

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: {
                facebook: 'https://www.facebook.com/littleonesns',
                instagram: 'https://www.instagram.com/littleonesns/',
                twitter: 'https://twitter.com/littleonesns',
                youtube: 'https://www.youtube.com/channel/UC2viX5InWtasFUGrRRw3rwQ/',
                email: 'mailto:smart@littleone.kr'
            },
            bgColor: this.props.backGroundColor
        }
    }

    render() {
        let language = this.props.language;
        return (
            <footer className={styles['footer']} style={{backgroundImage: this.props.backGroundColor}}>
                <div className={styles['footer--container']}>
                    <ul>
                        <li>
                            <a href={this.state.link.facebook} target={"_blank"} className={styles['facebook']}/>
                        </li>
                        <li>
                            <a href={this.state.link.twitter} target={"_blank"} className={styles['twitter']}/>
                        </li>
                        <li>
                            <a href={this.state.link.instagram} target={"_blank"} className={styles['instagram']}/>
                        </li>
                        <li>
                            <a href={this.state.link.youtube} target={"_blank"} className={styles['youtube']}/>
                        </li>
                        <li>
                            <a href={this.state.link.email} target={"_blank"} className={styles['email']}/>
                        </li>

                    </ul>
                    <div className={styles['footer--email-container']}>
                        <h3>{language.footer.first['01']}</h3>
                        <div>
                            <EmailSubscribe inputType={'email'} inputName={'email_subscribe'}/>
                        </div>
                    </div>
                    <div className={styles['footer--lower-container']}>
                        <a href={'/'}>
                            <img src={require('./Littleone Logo.svg')} width={"auto"} height={"auto"} alt={'리틀원의 로고'}/>
                        </a>
                        <p>© 2018 LITTLEONE All rights reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;