import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class ErrorPage extends Component {
  render() {
    return (
        <div className='ErrorPage'>
            <div className='Error404'>
                <img src='https://i.imgur.com/xtC3wnS.gif' alt='' />
                <div className='TextError'>
                    <div className='BigErrorText'>Error 404</div>
                    <div className='SmallErrorText'>Page not found</div>
                </div>
            </div>
        </div>
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
