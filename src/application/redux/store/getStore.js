import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function getStore (initialState = {}) {
    return createStore(
        rootReducer,
        initialState
    );
}
