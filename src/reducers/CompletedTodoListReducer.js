import { TODO_COMPLETE_LIST } from '../actions/types';
  
export default (state = [], action) => {
  console.log("calling cationssss", [...state, action.payload]);
  switch (action.type) {
  case TODO_COMPLETE_LIST:
    return [...state, action.payload];
  default:
    return state;
  }
};
  