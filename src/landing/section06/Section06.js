import React from 'react';
import styles from './Section06.scss';

class Section06 extends React.Component{
    render(){
        return(
            <section className={styles['kickstarter-section']}>

                <a href={'/'}>
                    <img src={require('./_kick.png')} alt={"littleone's kiskstarter page"}/>
                </a>

            </section>
        )
    }
}

export default Section06;