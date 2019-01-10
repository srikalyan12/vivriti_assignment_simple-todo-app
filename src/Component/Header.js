import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Header extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <>
        <h4>{this.props.title}</h4>
        <div className='app-heading-hr'/>
      </>
    );
  }
}

Header.propTypes = {
  title: propTypes.string
};

Header.defaultProps = {
  title: ''
};

export default Header;
