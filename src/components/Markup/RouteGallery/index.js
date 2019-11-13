/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GalleriesDescription from '../../../description/galleries';
import Gallery from './Gallery';
import ErrorPage from '../ErrorPage';
// import ErrorPage from './ErrorPage';
// import ErrorPage from './ErrorPage';
// import classnames from 'classnames';
class RouteGallery extends Component {
  componentDidMount() {
    const { name } = this.props.match.params;
    console.log(`Путь срани - ${name}`);
  }

  render() {
    const { name } = this.props.match.params;
    let isExist = false;
    return (
        <div className='RouteGallery'>
            {
                _.map(GalleriesDescription, (item) => {
                  if (item.name === name) {
                    isExist = true;
                    return (
                        <Gallery data={item.name} />
                    );
                  }
                  return null;
                })
        }
            { !isExist && <ErrorPage /> }
        </div>
    );
  }
}

RouteGallery.propTypes = {
  match: PropTypes.object.isRequired,
};

// RouteGallery.defaultProps = {
//
// };

function select(/* store */) {
  return { };
}

export default connect(select)(RouteGallery);
