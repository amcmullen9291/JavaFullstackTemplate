import { combineReducers } from 'redux';
import { FunctionalFactsReducer, ClassComponentFactsReducer } from './FactsReducer';
import { NameReducer } from './NameReducer';
const RootReducer = combineReducers({
    functionalComponents: FunctionalFactsReducer,
    classComponents: ClassComponentFactsReducer,
    name: NameReducer
});

export default RootReducer;