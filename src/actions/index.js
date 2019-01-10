import { TODO_LIST, TODO_EDIT_LIST, TODO_DELETE_LIST, TODO_COMPLETE_LIST }  from './types';

export const addTodoList = payload => (dispatch) => {
  dispatch(addToList(payload));
};
export const addTodoEditList = (payload,index) => (dispatch) => {
  dispatch(addToEditList(payload,index));

};

export const deleteToList = (payload) => (dispatch) => {
  dispatch(deleteList(payload));
};

export const completeToList = (index) => (dispatch,getState) => {
  let payload = getState().todoList.filter(value => value.key == index)[0];

  dispatch(deleteList(index));
  dispatch(completeList(payload));
};

function completeList(payload) {
  return {
    type: TODO_COMPLETE_LIST,
    payload
  };
}



function addToList(payload) {
  return {
    type: TODO_LIST,
    payload
  };
}

function addToEditList(payload, index) {
  return {
    type: TODO_EDIT_LIST,
    payload,
    index
  };
}

function deleteList(payload) {
  return {
    type: TODO_DELETE_LIST,
    payload
  };
}
