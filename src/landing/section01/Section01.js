import React from 'react';
import * as styles from './Section01.scss';
import Player from '@vimeo/player'

class Section01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: 'https://player.vimeo.com/video/292665914?autoplay=1&loop=1',
            play: false,
            width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    };
    }


    componentDidMount(e) {
        const video = document.querySelector('iframe');
        let vimeo = new Player(video);
    }

    componentWillMount() {
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w < 641) {
            this.setState(function () {
                return {
                    video: 'https://player.vimeo.com/video/292665914'
                }
            });
        } else {
            this.setState(function () {
                return {
                    video: 'https://player.vimeo.com/video/292665914?background=1'
                }
            });
        }

    }

    shouldComponentUpdate(nextProps) {
        return nextProps;
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