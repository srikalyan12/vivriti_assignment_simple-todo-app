import React, { Component } from 'react';
import propTypes from 'prop-types';
import EditTodo from './EditTodo';
export class TodoList extends Component {

  constructor(props) {
    super(props);
    this.onClickdelete = this.onClickdelete.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  onClickdelete(event) {
    this.props.deleteCalled(event.target.id);
  }

  onClickEdit(event) {
    this.props.editCalled(event.target.id);
  }
  onClickSave(index) {
    this.props.saveCalled(index);
  }
  onCheckboxClick(event) {
    this.props.checkboxCalled(event.target.id,event.target.checked);
  }


  render() { 
    return (
      <div>
        { this.props.toDoList.length === 0 ?  <div><strong className='app-todolist-empty'>TODO List is Empty</strong></div> :
          this.props.toDoList.map((value) => {
            return ( <div key = {value.key} className='row app-Todolist'>
              <div className="col-sm-2">
                <input type="checkbox" onChange={this.onCheckboxClick} id={value.key} checked={value.check} className="custom-control-input" />  
              </div>
              <EditTodo 
                editModeList={this.props.editModeList}
                text={value.text}
                index={value.key}
                onClickEdit={this.onClickEdit}
                onClickSave={this.onClickSave}
                onChangeHandler={this.onChangeHandler}
              />
              <div className="col-sm-2"><a onClick={this.onClickdelete} id={value.key} href='#'>Delete</a></div>
            </div>);
          })}
      </div>
    );
  }
}
TodoList.propTypes = {
  toDoList : propTypes.array,
  editModeList: propTypes.array,
  deleteCalled: propTypes.func,
  checkboxCalled: propTypes.func,
  editCalled: propTypes.func,
  saveCalled: propTypes.func,
  check: propTypes.bool
};

export default TodoList;
