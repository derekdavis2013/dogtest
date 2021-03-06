import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { Route } from "react-router-dom";
import rootReducer from "./state/reducers"
import Home from "./Components/Home"
// import "./style/main.scss";
// import "style-loader!css-loader!react-table/react-table.css";

const history = createHistory();

const middleware = composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunkMiddleware)
);

const store = createStore(rootReducer, middleware);

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
    <div className="flex flex-site flex-col">
    <Route path="/">
    <div>
    <Route exact path="/" component={Home} />
</div>
</Route>
</div>
</ConnectedRouter>
</Provider>,
document.getElementById("root")
);
