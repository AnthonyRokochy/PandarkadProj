import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Background from '../Background';
import Opening from './Opening';
import Genre from './Genre';
import Gallery from './Gallery';

class Markup extends Component {
  render() {
    return (
        <div className='Markup'>
            <Background />
            <Switch>
                <Route exact path='/' render={() => <Opening />} />
                <Route exact path='/genre' render={() => <Genre />} />
                <Route exact path='/:name' render={() => <Gallery />} />
            </Switch>
        </div>
    );
  }
}

// Markup.propTypes = {
//
// };

// Markup.defaultProps = {
//
// };

function select(/* store */) {
  return { };
}

export default connect(select)(Markup);