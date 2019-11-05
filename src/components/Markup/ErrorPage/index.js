import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class ErrorPage extends Component {
  render() {
    return (
        <div className='ErrorPage'>Ooops, something went wrong...</div>
    );
  }
}

// ErrorPage.propTypes = {
//
// };

// ErrorPage.defaultProps = {
//
// };

function select(/* store */) {
  return { };
}

export default connect(select)(ErrorPage);
