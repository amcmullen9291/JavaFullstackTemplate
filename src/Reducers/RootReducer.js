import { combineReducers } from 'redux';
import { FunctionalFactsReducer, ClassComponentFactsReducer } from './FactsReducer';
const RootReducer = combineReducers({
    functionalComponents: FunctionalFactsReducer,
    classComponents: ClassComponentFactsReducer
});

export default RootReducer;