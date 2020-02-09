import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import CentillionApp from "./components/index";
import { reducers } from "./reducer";

/**
 * Create store to manage state over application
 */
const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    window["devToolsExtension"] ? window["devToolsExtension"]() : (f: any) => f
  )
);

/**
 * Stores the history for routing
 */
const history = syncHistoryWithStore(hashHistory, store);

/**
 * render the registered store routing with default component loading
 */
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={CentillionApp}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("Centillion_Softtech")
);
