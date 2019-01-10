import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoEditList } from '../actions';

export class EditTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      index: this.props.index
    };
    this.onChanageText = this.onChanageText.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onChanageText(event) {
    this.setState({
      text: event.target.value
    });
  }
 
  onClickSave() {
    this.props.addTodoEditList(this.state.text, this.props.index);
    this.props.onClickSave(this.props.index);
  }
  
  render() {
    if(this.props.editModeList.includes(this.props.index.toString())) {
      return (<><div className="col-sm-6"><input type='text' value={this.state.text} onChange={this.onChanageText} className="form-control" /></div>
              <div className="col-sm-2"><a onClick={this.onClickSave} id={this.props.index} href='#'>Save</a></div></>
      );
    }
    return (<><div className="col-sm-6"><strong>{this.props.text}</strong></div>
        <div className="col-sm-2"><a onClick={this.props.onClickEdit} id={this.props.index} href='#'>Edit</a></div></>);
  }
}

EditTodo.propTypes = {
  editModeList: propTypes.array,
  index: propTypes.number,
  text: propTypes.string,
  onChangeHandler: propTypes.func,
  onClickEdit:propTypes.func,
  addTodoEditList: propTypes.func,
  onClickSave: propTypes.func
};

EditTodo.defaultProps = {
  editModeList: [],
};

export default connect(null, { addTodoEditList })(EditTodo);