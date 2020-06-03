import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default function getStore (initialState = {}) {
    return createStore(
        rootReducer,
        initialState
    );
}
