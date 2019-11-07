/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/jsx-boolean-value */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
// import { Route, Switch } from 'react-router-dom';
// // import Background from '../Background';
// import Opening from './Opening';
// import Genre from './Genre';
// import RouteGallery from './RouteGallery';
// import Language from '../Language';
// import ErrorPage from './ErrorPage';
// import Background from '../Background';

class Markup extends Component {
  render() {
    const { loading } = this.props;
    return (
        <Fade in={!loading} timeout={{ exit: 800, enter: 400 }}>
            <div className='Markup'>
                {/* <Background />
                <Language />
                <Switch>
                    <Route exact path='/' render={() => <Opening />} />
                    <Route exact path='/genre' render={() => <Genre />} />
                    <Route exact path='/:name' render={(props) => <RouteGallery {...props} />} />
                    <Route path='*' render={() => <ErrorPage />} />
                </Switch> */}
            </div>
        </Fade>
    );
  }
}

Markup.propTypes = {
  loading: PropTypes.bool.isRequired,
};

// Markup.defaultProps = {
//
// };

function select(store) {
  return {
    loading: store.viewReducer.loading,
  //
  };
}

export default connect(select)(Markup);
