import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/Counter";
import setUserReducer from "./ducks/User";
import { watcherSaga } from "../sagas/rootSaga";

const reducer = combineReducers({
  counter: counterReducer,
  user: setUserReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
