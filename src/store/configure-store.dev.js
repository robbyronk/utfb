import {createStore, applyMiddleware, compose} from "redux";
import {syncHistory} from "react-router-redux";
import {browserHistory} from "react-router";
import DevTools from "../containers/dev-tools";
import createSagaMiddleware from "redux-saga";
import createLogger from "redux-logger";
import rootReducer from "../reducers";
import customMiddleware from "../middleware";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware()

const reduxRouterMiddleware = syncHistory(browserHistory)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, customMiddleware, reduxRouterMiddleware, createLogger()),
      DevTools.instrument()
    )
  )

  sagaMiddleware.run(rootSaga)
  
  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

