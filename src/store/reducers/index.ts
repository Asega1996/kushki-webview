import { combineReducers } from 'redux'
import payments from './payments';


const reducers = combineReducers({
    payments: payments
})

export type RootState = ReturnType<typeof reducers>;

export default reducers
