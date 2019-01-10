import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddItem from './Component/AddItem';
import Todo from './Component/Todo';
import Completed from './Component/Completed';
import propTypes from 'prop-types';


export class App extends Component {

  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <div>
        <div className='background-app'/>
        <div className='app-main'>
          <AddItem />
          <Todo />
          <Completed completedToDoList={this.props.completedToDoList} />
        </div> 
      </div>
    );
  }
}

const mapStateToProps = ({ todoList, completedToDoList }) => {
  return { todoList, completedToDoList };
};

App.propTypes = {
  todoList : propTypes.array,
  completedToDoList: propTypes.array
};
export default connect(mapStateToProps)(App);
