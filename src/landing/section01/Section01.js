import React from 'react';
import * as styles from './Section01.scss';

class Section01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: 'https://player.vimeo.com/video/292665914?autoplay=1&loop=1'
        }
    }

    componentDidMount() {
        var w = window.innerWidth;
        if (w < 641) {
            this.setState(function () {
                return {
                    video: 'https://player.vimeo.com/video/292665914'
                }
            })
        }
    }

    render() {
        return (
            <section className={styles['video-section']} id={'section-02'}>
                <div className={styles['embed-container']}>
                    <div className={styles['scroll-cover']}></div>
                    <iframe id="video" src={this.state.video} frameBorder='0' allow="autoplay"
                            webkitallowfullsscreen="true" mozallowfullscreen="true"
                            allowFullScreen={true} scrolling={'yes'}></iframe>
                </div>
            </section>
        )
    }
}

export default Section01;