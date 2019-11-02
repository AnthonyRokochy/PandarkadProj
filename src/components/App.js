/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Markup from './Markup';
import { AppContext } from '../contexts/contexts';

class App extends Component {
  componentDidMount() {
    dict.translate(this.props.lang);
  }

  render() {
    const { lang } = this.props;
    return (
        <div className='App'>
            <AppContext.Provider value={{ lang }}>
                <Markup />
            </AppContext.Provider>
        </div>
    );
  }
}
App.propTypes = {
  lang: PropTypes.string.isRequired,
  // loading: PropTypes.bool.isRequired,
  // dict: PropTypes.object.isRequired,
};

function select(store) {
  return {
    lang: store.viewReducer.userParams.lang,
    // dict: store.viewReducer.dict,
  };
}

export default withRouter(connect(select)(App));
