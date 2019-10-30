import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class ImagesItem extends Component {
  render() {
    const { source } = this.props;
    return (
        <div className={classnames('ImagesItem', 'noselect')}>
            <img src={source} alt='background img' />
        </div>
    );
  }
}
ImagesItem.propTypes = {
  source: PropTypes.isRequired,
};

export default ImagesItem;
