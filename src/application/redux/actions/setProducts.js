import { SET_PRODUCTS } from '../types/types';

const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});

export default setProducts;
