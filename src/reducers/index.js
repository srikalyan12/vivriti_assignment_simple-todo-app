import { combineReducers } from 'redux';
import todoList from './TodoListReducer';
import completedToDoList from './CompletedTodoListReducer';

export default combineReducers({
  todoList,
  completedToDoList
});
  