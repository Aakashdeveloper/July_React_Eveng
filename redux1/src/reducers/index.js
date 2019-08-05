import { combineReducers} from 'redux';
import movies from './movies_reducers';

const rootReducer = combineReducers({
    movies
})

export default rootReducer;