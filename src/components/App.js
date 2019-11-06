/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Markup from './Markup';
import Loader from './Helpers/Loader';
import {
  CLOSE_LOADER, OPEN,
  //
} from '../redux/actions/actions';
import { AppContext } from '../contexts/contexts';

class App extends Component {
  componentDidMount() {
    dict.translate(this.props.lang);
    const isMobile = window.screen.width < 600;
    window.onload = () => {
      this.props.dispatch(OPEN({ isMobile }));
      this.props.dispatch(CLOSE_LOADER());
    };
  }

  render() {
    const { lang } = this.props;
    return (
        <div className='App'>
            <AppContext.Provider value={{ lang }}>
                <Loader />
                <Markup />
            </AppContext.Provider>
        </div>
    );
  }
}
App.propTypes = {
  lang: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
  // dict: PropTypes.object.isRequired,
};

function select(store) {
  return {
    loading: store.viewReducer.loading,
    lang: store.viewReducer.userParams.lang,
    // dict: store.viewReducer.dict,
  };
}

export default withRouter(connect(select)(App));
