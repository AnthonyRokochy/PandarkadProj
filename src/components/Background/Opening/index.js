import React, { Component } from 'react';
import TextButtons from '../TextButtons';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Opening extends Component {
  render() {
    return (
        <div className='Opening'>
            <div className='LogoImg'>
                <img src='https://i.imgur.com/U54Rosh.png' alt='logotype' />
            </div>
            <div className='BlurSpace'>
                <div className='BlurSpaceBorder' />
                <div className='BlurSpaceOpacity' />
            </div>
            <div className='IntroductionText'>
                <div className='FrontText'>PANDARKAD</div>
                <div className='SubText'> London is the capital of Great Britain. London is the capital of Great Britain.  London is the capital of Great Britain.  London is the capital.</div>
                <TextButtons />
            </div>
        </div>
    );
  }
}

export default Opening;
