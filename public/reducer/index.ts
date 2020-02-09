import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { applicationReducer } from "./ApplicationReducer";
import { applicationThemeReducer } from "./applicationthemereducer";
import {applicationAboutUsReducer} from "./applicationaboutusreducer";

/**
 * the main reducer to combine application reducers
 */
export const reducers = combineReducers({
    routing: routerReducer,
    applicationThemeReducer,
    applicationAboutUsReducer,
    application: applicationReducer
});
