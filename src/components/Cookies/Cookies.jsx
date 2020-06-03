import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import setCookiesAgreement from "../../redux/actions/setCookiesAgreement";
import style from './Cookies.module.css';

const mapStateToProps = ({application}) => {
    return {
        cookiesAgreement: application.cookiesAgreement
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCookiesAgreement: payload => dispatch(setCookiesAgreement(payload))
    };
};

const Cookies = props => {
    const agreement = () => {
        localStorage.agreement = true;
        props.setCookiesAgreement(true);
    };

    return (
        (!localStorage.agreement && !props.cookiesAgreement) &&
        <aside className={style.wrapper}>
            <img src={require('./img/helm.svg')} alt="helm"/>
            <p> Мы используем файлы <span className={style.cookies}> cookies </span></p>
            <button className={style.okButton}
                    onClick={agreement}>
                OK
            </button>
        </aside>
    )

}

Cookies.propTypes = {
    cookiesAgreement: PropTypes.bool.isRequired,
    setCookiesAgreement: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookies);
