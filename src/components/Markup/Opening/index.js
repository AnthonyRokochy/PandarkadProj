import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextButton from '../../Helpers/TextButton';
import { AppContext } from '../../../contexts/contexts';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
function Opening() {
  const { lang } = useContext(AppContext);
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
              <div className='SubText'>
                  { dict.translate('Opening.HelloText', lang) }
              </div>
              <TextButton />
          </div>
      </div>
  );
}

Opening.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // dict: PropTypes.object.isRequired,
};

function select(store) {
  return {
    // lang: store.viewReducer.lang,
    dict: store.viewReducer.dict,
  };
}


export default withRouter(connect(select)(Opening));
