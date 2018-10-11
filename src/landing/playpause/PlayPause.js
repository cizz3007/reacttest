import React from 'react';
import styles from './PlayPause.scss';
import Player from '@vimeo/player';

class PlayPause extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickStopHandler = this.onClickStopHandler.bind(this);

    }

    onClickHandler(e) {
        const i = document.querySelector('iframe');
        const pauseBtn = document.getElementsByClassName(styles['__pause'])[0];
        const target = e.currentTarget;
        const vimeo = new Player(i);

        target.classList.add(styles['playing']);
        pauseBtn.classList.add(styles['show']);
        vimeo.setVolume(1)

    }

    onClickStopHandler(e) {
        const i = document.querySelector('iframe');
        const pauseBtn = document.getElementsByClassName(styles['__play'])[0];
        const pause = document.getElementsByClassName(styles['__pause'])[0];
        const target = e.currentTarget;
        const vimeo = new Player(i);

        pause.classList.remove(styles['show']);
        pauseBtn.classList.remove(styles['playing']);
        vimeo.setVolume(0)

    }

    onLoadHandler(){
        const i = document.querySelector('iframe');
        const vimeo = new Player(i);
    }

    render() {
        return (
            <div className={styles['vimeo-play-box']} onLoad={this.onLoadHandler}>
                <a href={"javascript:void(0)"} className={styles['__pause-btn']} onClick={this.onClickStopHandler}>
                    <span className={styles['__pause']}></span>
                </a>
                <button className={styles['__play']} type={"button"} onClick={this.onClickHandler}></button>
            </div>

        )
    }
}

export default PlayPause;