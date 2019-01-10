import React, { Component } from 'react';
import Header from './Header';
import propTypes from 'prop-types';

export class Completed extends Component {

  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <>
      <Header title='Completed' />
      <div className='row app-completed'>
        {/* <TodoList toDoList = {this.props.completedToDoList} /> */}
        <div>
          { this.props.completedToDoList.length === 0 ?  <div className="col-sm-12"><strong className='app-todolist-empty'>TODO List is Empty</strong></div> :
            this.props.completedToDoList.map((value) => {
              return ( <div key = {value.key} className='row app-Todolist'>
                <div className="col-sm-2">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" id={value.key} checked={true} className="custom-control-input" />
                  </div>  
                </div>
                <div className="col-sm-6"><del>{value.text}</del></div>
                <div className="col-sm-2">Save</div>
                <div className="col-sm-2">Delete</div>
              </div>);
            })}
        </div>
      </div>
      </>
    );
  }
}
Completed.propTypes = {
  completedToDoList : propTypes.array
};
export default Completed;
