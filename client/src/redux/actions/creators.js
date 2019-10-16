import {SET_PHONES, SET_PHONES_STATUS} from "./types";
import {STATUS_LOADING, STATUS_READY} from "../reducer/const";

export const setPhones = phones => ({
    type: SET_PHONES,
    phones
});

export const setPhonesStatus = status => ({
    type: SET_PHONES_STATUS,
    status
});

export const updatePhones = () => async dispatch => {
    dispatch(setPhonesStatus(STATUS_LOADING));

    // fetch phones
    const phonesResponse = await fetch('/api/phones/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    const phones = await phonesResponse.json();

    //set phones & update status
    dispatch(setPhones(phones));
    dispatch(setPhonesStatus(STATUS_READY));
};

export const putPhone = ({name, number}) => async dispatch => {
    dispatch(setPhonesStatus(STATUS_LOADING));
    await fetch('/api/phones', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, number})
    });
    await dispatch(updatePhones());
};

export const updatePhone = ({id, name, number}) => async dispatch => {
    dispatch(setPhonesStatus(STATUS_LOADING));
    await fetch(`/api/phones/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, number})
    });
    return dispatch(updatePhones());
};

export const deletePhone = id => async dispatch => {
    dispatch(setPhonesStatus(STATUS_LOADING));
    await fetch(`/api/phones/${id}`, {
        method: 'DELETE'
    });
    return dispatch(updatePhones());
};