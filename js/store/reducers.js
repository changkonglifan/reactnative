import {combineReducers} from "redux";

import login from "../reducers/login"

//将所有的reducer 整合在一起
export default combineReducers({
    login : login
});