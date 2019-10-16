import {createSelector} from 'reselect';

export const selectPhonesMeta = state => state.phonesMeta;
export const selectPhonesStatus = state => selectPhonesMeta(state).status;
export const selectPhones = state => state.phones;
