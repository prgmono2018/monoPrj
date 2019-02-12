// src/js/store/index.js
import { createStore } from "redux";
import cmsReducer from "../reducers/cmsReducer";



const store = createStore(cmsReducer);
export default store;