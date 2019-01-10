import { TODO_LIST, TODO_EDIT_LIST,TODO_DELETE_LIST } from '../actions/types';
import _ from 'lodash';
  
export default (state = [], action) => {
  switch (action.type) {
  case TODO_LIST:
    return [...state, {
      text: action.payload,
      key: state.length + 1,
      check: false
    }];
  case TODO_EDIT_LIST: 
    return _.map(state, value => {
      if(action.index == value.key) {
        return { ...value, text:action.payload };
      }
      return value;
    });
  case TODO_DELETE_LIST:
    return state.filter((value) => value.key != action.payload);
  default:
    return state;
  }
};
  