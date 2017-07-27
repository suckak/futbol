import { combineReducers } from 'redux'
import people from './people'
import futbolReducer from './futbolReducer';

const rootReducer = combineReducers({
    people,
    futbol:futbolReducer
})

export default rootReducer
