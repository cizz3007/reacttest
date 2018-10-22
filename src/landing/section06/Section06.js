import React from 'react';
import styles from './Section06.scss';

class Section06 extends React.Component{
    render(){
        return(
            <section className={styles['kickstarter-section']}>
                <a href={'https://www.kickstarter.com/projects/nextlevelparenting/1428879757?ref=596388&token=77df00bc'}>
                    <img src={require('./_kick.png')} alt={"littleone's kiskstarter page"}  width={"auto"} height={"auto"}/>
                </a>
            </section>
        )
    }
}

export default Section06;