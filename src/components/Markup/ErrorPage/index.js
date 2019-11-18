import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { AppContext } from '../../../contexts/contexts';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
function ErrorPage() {
  const { lang } = useContext(AppContext);
  return (
      <div className='ErrorPage'>
          <div className='Error404'>
              <img src='https://i.imgur.com/xtC3wnS.gif' alt='' />
              <div className='TextError'>
                  <div className='BigErrorText'> 404</div>
                  <div className='SmallErrorText'>{ dict.translate('ErrorPage.SmallErrorText', lang) }</div>
              </div>
          </div>
      </div>
  );
}


// ErrorPage.propTypes = {
//
// };

// ErrorPage.defaultProps = {
//
// };

function select(store) {
  return {
    dict: store.viewReducer.dict,
  };
}

export default connect(select)(ErrorPage);
