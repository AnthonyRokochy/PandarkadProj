import React, { Component } from 'react';
import Opening from './Opening';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Greetings extends Component {
  render() {
    return (
        <div className='Greetings'>
            <div className='BackgroundImg'>
                <img src='https://i.imgur.com/5btqks9.jpg' alt='background img' />
            </div>
            <Opening />
        </div>
    );
  }
}

export default Greetings;
