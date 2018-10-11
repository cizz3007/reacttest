import React from 'react';
import styles from './EmailSubscribe.scss';
import classNames from 'classnames'
import EmailNotify from "../../promotion/action/EmailNotify";

const cx = classNames.bind(styles);

class EmailSubscribe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            inputType: this.props.inputType,
            inputName: this.props.inputName
        }
        this.onKeyHandler = this.onKeyHandler.bind(this);
        this.removeClickHanlder = this.removeClickHanlder.bind(this);
    }

    onKeyHandler(e) {
        let keyVal = e.currentTarget.value;
        let valLen = keyVal.length;
        console.log(keyVal, valLen);
        if (valLen > 0) {
            this.setState(function () {
                return {
                    active: true
                }
            });
        } else{
            this.setState(function () {
                return {
                    active: false
                }
            });
        }
    }
    shouldComponentUpdate(nextState){
        return nextState;
    }

    removeClickHanlder(){
        let targetElement = `input[name=${this.state.inputName}]`;
        let target = document.querySelector(targetElement);
        console.log(targetElement,target);
        target.value = '';
        this.setState(function () {
            return {
                active: false
            }
        });
        target.focus();
    }

    render() {
        return (
            <div className={styles['email-subscribe-component']}>
                <form>
                    <fieldset>
                        <legend>email-subscribe-component</legend>
                        <label htmlFor={'email-subscribe-component'}>
                            <input type={this.state.inputType} name={this.state.inputName}
                                   id={'email-subscribe-component'} onKeyUp={this.onKeyHandler} placeholder={'Please enter your email'}/>
                            <a href={'javascript:void(0)'} onClick={this.removeClickHanlder}
                               className={cx(styles['__remove-email-text'], this.state.active === true ? styles['active'] : null)}></a>
                        </label>
                        <button type={'button'} onClick={EmailNotify}>NOTIFY ME</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default EmailSubscribe;