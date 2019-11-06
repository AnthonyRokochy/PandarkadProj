import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class ImagesItem extends Component {
  render() {
    const { sorce } = this.props;
    console.log(sorce);
    return (
        <div className={classnames('ImagesItem', 'noselect')}>
            <img src={sorce} alt='background img' />
        </div>
    );
  }
}
ImagesItem.propTypes = {
  sorce: PropTypes.string.isRequired,
};

export default ImagesItem;
