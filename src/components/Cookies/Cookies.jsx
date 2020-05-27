import React, {Component} from 'react';
import style from './Cookies.module.css';

export default class Cookies extends Component {
    state = {
        agreement: false
    };

    agreement = () => {
        localStorage.agreement = true;
        this.setState({agreement: true});
    };

    render() {
        return (
            (!localStorage.agreement && !this.state.agreement) &&
            <aside>
                <img src={require('./img/helm.svg')} alt="helm"/>
                <p> Мы используем файлы <span className={style.cookies}> cookies</span></p>
                <button className={style.okButton} onClick={this.agreement}>
                    OK
                </button>
            </aside>
        )
    }
}
