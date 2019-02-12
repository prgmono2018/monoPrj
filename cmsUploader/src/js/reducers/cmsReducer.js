import { GET_ALL_ITEMS} from "../constants/action-types";
console.log("init");
const initialState = {

  allConfig: []
};

/*const initialState = Immutable({
  topicsByUrl: undefined,
  selectedTopicUrls: []
});*/

export default function cmsReducer(state = initialState, action) {
  console.log("reducer a type="+action.type+ "pay="+action.payload)
  if (action.type === GET_ALL_ITEMS) {
      console.log("reducer 1")
    return Object.assign({}, state, {
        allConfig: state.allConfig.concat(action.payload)
    });
  }
  return state;
}

export function getOneItem(state) {
  console.log("11");
    return state.allConfig[0];
  }
  
  export function getAllItems(state) {
    console.log(">>> getAllItems");
    return state.allConfig;
  }
