import React from 'react';
import $ from 'jquery';
import styles from './Section02.scss';
window.jQuery = $;
window.$ = $;
require('../../library/bxslider.min');


class Section02 extends React.Component {

    componentDidMount() {
        const slider = '.'+styles['slider'];

        $(slider).bxSlider({
            touchEnabled: true,
            responsive: true,
            pager: true,
            infiniteLoop: true,
            onSliderLoad: function () {

            },
            onSlideNext: function (e) {

            },
            onSlidePrev: function (e) {

            },
        });


    }

    shouldComponentUpdate() {


    }

    render() {
        return (
            <section className={styles['slider-section-upper']}>
                <div className={styles['slider']}>
                    <img src={require('./con02_01.png')}/>
                    <img src={require('./con02_02.png')}/>
                    <img src={require('./con02_03.png')}/>
                    <img src={require('./con02_04.png')}/>
                </div>
            </section>
        )
    }
}

export default Section02;
