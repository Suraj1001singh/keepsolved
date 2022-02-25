import rootSaga from "./saga";
import rootReducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'

//  saga middleware
const sagaMiddleware = createSagaMiddleware();

//create middleware for redux
let middleware = applyMiddleware(sagaMiddleware);
const reducers = combineReducers(rootReducers);
//create redux store
const store = createStore(reducers, composeWithDevTools(middleware));

//run saga watchers
sagaMiddleware.run(rootSaga);

//export store
export default store;
