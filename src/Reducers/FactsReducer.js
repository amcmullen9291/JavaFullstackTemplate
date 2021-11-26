import { ActionTypes } from '../Constants/Action.types';

const classComponentFacts = {
    classFacts: [],
};

const functionalFacts = {
    functionalFacts: [],
}

export const FunctionalFactsReducer = (state=functionalFacts, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_FACTS:
            return { ...state, facts: payload};
        default:
            return state
    }
};
export const ClassComponentFactsReducer = (state=classComponentFacts, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_FACTS:
            return { ...state, facts: payload};
        default:
            return state
    }
};