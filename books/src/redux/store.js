import { createStore , combineReducers, applyMiddleware} from "redux";
import reducerAddBooks from './reducers/reducerAddBooks'
import thunk from 'redux-thunk'
import reducerFetchedBooks from './reducers/reducerfetchBooks'

const rootreducer = combineReducers({
    library : reducerAddBooks, 
    search : reducerFetchedBooks
})


const store = createStore(rootreducer, applyMiddleware(thunk))

export default store