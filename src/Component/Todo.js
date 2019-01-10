import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteToList, completeToList } from '../actions';

import Header from './Header';
import TodoList from './TodoList';
export class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode : []
    };
    this.deleteCalled = this.deleteCalled.bind(this);
    this.editCalled = this.editCalled.bind(this);
    this.saveCalled = this.saveCalled.bind(this);
    this.checkboxCalled = this.checkboxCalled.bind(this);
  }

  editCalled(editMode) {
    this.setState(prevState => ({
      editMode: [...prevState.editMode, editMode]
    }));
  } 
  saveCalled(index) {
    this.setState({
      editMode: this.state.editMode.filter((value) => value != index)
    });
  }
  deleteCalled(index) {
    this.props.deleteToList(index);
  }
  checkboxCalled(index, checked) {
    this.props.completeToList(index, checked);
  }
  

  render() {
    return (
      <>
      <Header title='TODO' />
      <div className='app-todo'>
        <TodoList 
          toDoList = {this.props.todoList}
          deleteCalled = {this.deleteCalled}
          editCalled = {this.editCalled}
          saveCalled = {this.saveCalled}
          editModeList = {this.state.editMode}
          checkboxCalled ={this.checkboxCalled}
        />
      </div>
      </>
    );
  }
}

const mapStateToProps = ({ todoList }) => {
  return { todoList };
};

Todo.propTypes = {
  todoList : propTypes.array,
  editModeList : propTypes.array,
  deleteToList : propTypes.func,
  completeToList: propTypes.func
};

Todo.defaultProps = {
  todoList : [],
};

export default connect(mapStateToProps, { deleteToList, completeToList })(Todo);
