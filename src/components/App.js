/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Background from './Background';
import Opening from './Opening';
import Genre from './Genre';
import Gallery from './Gallery';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Background />
                <Route exact path='/' component={Opening} />
                <Route path='/genre' component={Genre} />
                <Route path='/gallery' component={Gallery} />
            </div>
        </BrowserRouter>
    );
  }
}

// App.propTypes = {
//
// };

// App.defaultProps = {
//
// };

// function select(/* store */) {
//     return { };
// }

export default App;
