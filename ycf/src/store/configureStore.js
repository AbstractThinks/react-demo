import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import createLogger from 'redux-logger'
import {boilerplateReducer1, boilerplateReducer2} from '../reducer/boilerplateReducer';
import callAPIMiddleware from '../middleware/callMiddleware';

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
        boilerplateReducer1,
        boilerplateReducer2
});

const createStoreWithMiddleware = applyMiddleware(
    // thunkMiddleware,
    callAPIMiddleware,
    loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}
