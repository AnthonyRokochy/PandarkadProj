import React, { Component } from 'react';
import Opening from './Opening';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Background extends Component {
  render() {
    return (
        <div className='Background'>
            <div className='BackgroundImg'>
                <img src='https://i.imgur.com/PV31Cmg.png' alt='background img' />
            </div>
            <Opening />
        </div>
    );
  }
}

export default Background;
