/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Greetings from './Greetings';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class App extends Component {
  render() {
    return (
        <div className='App'>
            <Greetings />
            <div className='Test' />
        </div>
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
