import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import { connect } from 'react-redux';

class Loader extends Component {
  render() {
    const { loading } = this.props;
    return (
        <Fade in={loading}>
            <div className='Loader'>
                <img src='https://i.imgur.com/xtC3wnS.gif' alt='' />
                <div className='LoadingText'> Loading... </div>
            </div>
        </Fade>
    );
  }
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  //
};

function select(store) {
  return {
    loading: store.viewReducer.loading,
    //
  };
}


export default connect(select)(Loader);
