/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// import { connect } from 'react-redux';
// import classnames from 'classnames';
class ImagesItem extends Component {
  render() {
    const { urls } = this.props;
    const { id } = this.props;
    const { onClick } = this.props;
    const { isSelected } = this.props;
    return (
        <div className={`ImagesItem ${isSelected ? 'isSelect' : ''}`}>
            <img src={urls} id={id} onClick={onClick} alt='background img' />
        </div>
    );
  }
}
ImagesItem.propTypes = {
  urls: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ImagesItem;
