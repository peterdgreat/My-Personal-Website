import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import projectsReducer from './projects/projects';

const reducer = combineReducers({
  projectsReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
