import {SET_PHONES, SET_PHONES_STATUS} from "../actions";
import {STATUS_READY} from "./const";

const PHONES_DEFAULT_STATE = [];
const PHONES_META_DEFAULT_STATE = {
    status: STATUS_READY
};


export const phones = (prevState = PHONES_DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_PHONES:
            return action.phones;
        default:
            return prevState;
    }
};

export const phonesMeta = (prevState = PHONES_META_DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_PHONES_STATUS:
            return {...prevState, status: action.status};
        default:
            return prevState;
    }
}