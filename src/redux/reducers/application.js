import {
    SET_LANG,
    SET_COOKIES_AGREEMENT
} from '../types/types';

const initialState = {
    cookiesAgreement: false,
    lang: 'ua'
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_LANG:
        return { ...state, lang: action.payload };
    case SET_COOKIES_AGREEMENT:
        return { ...state, cookiesAgreement: action.payload };
    default:
        return state;
    }
}
