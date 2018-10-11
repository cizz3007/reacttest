import React from 'react';
import $ from 'jquery';
import styles from './Section02.scss';

window.jQuery = $;
window.$ = $;
require('../../library/bxslider.min');


class Section02 extends React.Component {


    constructor(props){
        super(props);

        this.onloadComplete = this.onloadComplete.bind(this);
    }


    onloadComplete(){
        const slider = '.' + styles['slider-top'];
        const upperSlider = $(slider).bxSlider({
            responsive: true,
            pager: true,
            infiniteLoop: true,
            touchEnabled: false
        });
    }


    render() {
        return (
            <section className={styles['slider-section-upper']}>
                <div className={styles['slider-top']} onLoad={this.onloadComplete}>
                    <img src={require('./promotion-pic-1@2x-compressor.jpg')}/>
                    <img src={require('./promotion-pic-2@2x-compressor.jpg')}/>
                    <img src={require('./promotion-pic-3@2x-compressor.jpg')}/>
                    <img src={require('./promotion-pic-4@2x-compressor.jpg')}/>
                </div>
            </section>
        )
    }
}

export default Section02;
