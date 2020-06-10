import { SET_FILTERS } from '../types/types';

const setFilters = payload => ({
    type: SET_FILTERS,
    payload
});

export default setFilters;
