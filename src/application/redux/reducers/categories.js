import {
    SET_CATEGORIES
} from '../types/types';

const initialState = {
    categories: [
        {
            ru: 'Тенты на лодки',
            ua: 'Тенти на човни',
            id: 'iOm7TsA'
        },
        {
            ru: 'Аксессуары для охоты и рыбалки',
            ua: 'Аксесуари для полювання та риболовлі',
            id: 'hlM2f9p'
        },
        {
            ru: 'Чехлы на лодочные моторы',
            ua: 'Чохли на човнові мотори',
            id: 'oOmf7DsA'
        },
        {
            ru: 'Страховочные жилеты',
            ua: 'Страхувальні жилети',
            id: 'zOm9TsA'
        },
        {
            ru: 'Сумки и рюкзаки для надувных лодок',
            ua: 'Сумки та рюкзаки для надувных човнів',
            id: 'Tlm4TsA'
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_CATEGORIES:
        return { ...state, categories: action.payload };
    default:
        return state;
    }
}
