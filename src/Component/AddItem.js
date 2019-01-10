import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from './Header';
import { addTodoList } from '../actions';

export class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onTextChange =  this.onTextChange.bind(this);
    this.onAddClick =  this.onAddClick.bind(this);
    
  }
  onTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  onAddClick() {
    this.props.addTodoList(this.state.text);
  }

  render() {
    return (
      <div className='row app-additem'>
        <Header title='ADD ITEM' />
        <div className="form-group row app-additem-text">
          <div className="col-sm-10">
            <input type="text" value={this.state.text} onChange={this.onTextChange} className="form-control" />
          </div>
          <button className='btn btn-primary' onClick={this.onAddClick} >ADD</button>
        </div>
      </div>
    );
  }
}

AddItem.propTypes = {
  addTodoList: propTypes.func
};

AddItem.defaultProps = {
  addTodoList: () => {}
};
export default connect(null, { addTodoList })(AddItem);