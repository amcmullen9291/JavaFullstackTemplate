import { ActionTypes } from '../Constants/Action.types';

const name = {
    yourName: [],
};


export const NameReducer = (state=name, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_NAME:
            return { ...state, yourName: payload};
        default:
            return state
    }
};
