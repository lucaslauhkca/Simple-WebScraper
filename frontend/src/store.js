import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; 
import { surveyReducer } from './reducers/surveyReducer';

const rootReducer = combineReducers({
    survey: surveyReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
