import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_ITEM } from "../constants/action-types";
import { ADD_ONE_CONFIG } from "../constants/action-types";
import { GET_ALL_ITEMS } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

export function getItems() {
  console.log(">> was at action getItems")
   let payload=["kaaa","xhhhh","jjj"];
   console.log(">> getItems")
  return { type: GET_ALL_ITEMS, payload };
}

