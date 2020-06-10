import {
    SET_FILTERS
} from '../types/types';

const initialState = {
    filters: [
        {
            type: 'radio',
            values: ['Носовые тенты со стеклом', 'Стояночные тенты', 'Тенты на лодки ПВХ'], //проверять на бэке длину строки < 30
            name: 'Тип:',
            id: 'fPe4Fe'
        },
        {
            type: 'radio',
            values: ['Камуфляж', 'Хаки', 'Черный'],
            name: 'Цвет:',
            id: 'fZe4Fe'
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_FILTERS:
        return { ...state, filters: action.payload };
    default:
        return state;
    }
}
