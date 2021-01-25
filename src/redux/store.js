import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import {rootSaga} from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];


if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const myStore = () => ({ store, persistor });
export default myStore;
