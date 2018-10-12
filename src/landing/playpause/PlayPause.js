import React from 'react';
import styles from './PlayPause.scss';
import classnames from 'classnames';
import Player from '@vimeo/player';

const cx = classnames.bind(styles);

class PlayPause extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active:true
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        const i = document.querySelector('iframe');
        const vimeo = new Player(i);
        if(this.state.active){
            vimeo.setVolume(1);
        } else{
            vimeo.setVolume(0);
        }

        this.setState(function(){
            return {
                active:!this.state.active
            }
        })

    }
    render() {
        return (
            <a href={"javascript:void(0)"} className={styles['vimeo-play-box']} onClick={this.onClickHandler}>
                <div className={ this.state.active === true ? styles['active']:null}></div>
            </a>

        )
    }
}

export default PlayPause;