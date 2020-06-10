import {combineReducers} from 'redux';
import application from './application';
import products from './products';
import filters from './filters';
import categories from './categories';

export default combineReducers({
    application,
    products,
    filters,
    categories
});
