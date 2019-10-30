import React, { Component } from 'react';
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
            <div className='LanguageContainer'>
                <div className='Divider' />
                <div className='LanguageText'>English</div>
            </div>
        </div>
    );
  }
}

export default Background;
