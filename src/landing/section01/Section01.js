import React from 'react';
import * as styles from './Section01.scss';
import Player from '@vimeo/player'

class Section01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: 'https://player.vimeo.com/video/292665914?background=1',
            play: false,
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

        };
    }

    componentWillMount() {

        const color = {
            brown: "color:#560000;font-size:11px;",
            red: "color:#d83128;font-size:11px;",
            yellow: "color:#ea991b;font-size:11px;",
            green: "color:#93ba2f;font-size:11px;",
            blue: "color:#4da4e0;font-size:11px;",
            magenta: "color:#ff5274;font-size:11px",
            black: "color:#333333;font-size:11px",
            tangerineTango: 'color:#EF5442',
            violetPurple: 'color:#604C8D; font-size:11px'
        };


        console.log(
            "%c*************************************************************\n" +
            "%c                 __    __________________    ______          \n" +
            "%c                / /   /  _/_  __/_  __/ /   / ____/          \n" +
            "%c               / /    / /  / /   / / / /   / __/             \n" +
            "%c              / /____/ /  / /   / / / /___/ /___             \n" +
            "%c             /_____/___/ /_/   /_/ /_____/_____/             \n" +
            "%c                       ____   _   __._____                   \n" +
            "%c                     / __  / / | / / ____/                   \n" +
            "%c                    / / / / /  |/ / __/                      \n" +
            "%c                   / /_/ / / /|  / /___                      \n" +
            "%c                  ._____. /_/ |_/_____/                      \n\n" +
            "%c*************************************************************\n" +
            "%c 개발자 : %c김창현                                    \n" +
            "%c-------------현재 인하우스 개발 중입니다.ver Beta------------\n",
            color.green, color.red, color.magenta, color.magenta, color.magenta,
            color.magenta, color.magenta, color.magenta, color.magenta, color.magenta,
            color.magenta, color.green, color.tangerineTango, color.blue, color.tangerineTango,
            color.violetPurple
        );

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