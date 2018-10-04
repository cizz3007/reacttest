import React from 'react';
import * as styles from './Footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: {
                facebook: 'https://www.facebook.com/littleonesns',
                instagram: 'https://www.instagram.com/littleonesns/',
                twitter: 'https://twitter.com/littleonesns',
                youtube: 'https://www.youtube.com/channel/UC2viX5InWtasFUGrRRw3rwQ/'
            },
            bgColor: this.props.backGroundColor
        }
    }

    render() {
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
                    </ul>
                    <a href={'/'}>
                        <div></div>
                    </a>
                    <p>© 2018 LITTLEONE All rights reserved.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;