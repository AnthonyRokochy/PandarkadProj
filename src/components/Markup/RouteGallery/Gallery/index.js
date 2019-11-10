/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImagesItem from './ImagesItem';
import Scroller from '../../../Helpers/Scroller';
import GalleriesDescription from '../../../../description/galleries';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { itemKey: 0 };
    this.ImageClick = this.ImageClick.bind(this);
    this.LeftClick = this.LeftClick.bind(this);
    this.RightClick = this.RightClick.bind(this);
  }

  ImageClick(key) {
    this.setState({
      itemKey: key,
    });
  }

  LeftClick() {
    let previousKey = this.state.itemKey;
    this.setState({
      itemKey: --previousKey,
    });
  }

  RightClick() {
    let previousKey = this.state.itemKey;
    this.setState({
      itemKey: ++previousKey,
    });
  }

  render() {
    console.log(this.state.itemKey);
    const { data } = this.props;
    return (
        <div className='Gallery'>
            <div className='ViewerContainer'>
                <div onClick={this.LeftClick} className={classnames('LeftButton', 'noselect', 'blink')}>{'<'}</div>
                <div className='Viewer'>
                    {
                    _.map(GalleriesDescription, (item) => {
                      if (item.name === data) {
                        return _.map(item.urls, (i, k) => {
                          console.log(this.state.itemKey);
                          if (k === this.state.itemKey) {
                            return (
                                <img src={i} alt='background img' />
                            );
                          }
                          return null;
                        });
                      }
                      return null;
                    })
                }

                </div>
                <div onClick={this.RightClick} className={classnames('RightButton', 'noselect', 'blink')}>{'>'}</div>
            </div>
            <div className='ImagesGallery'>
                <Scroller>
                    <div className='ImagesContainer'>
                        {
                    _.map(GalleriesDescription, (item) => {
                      if (item.name === data) {
                        return _.map(item.urls, (i, k) => {
                          return (
                              <ImagesItem
                                urls={i}
                                id={k}
                                onClick={() => this.ImageClick(k)}
                              />
                          );
                        });
                      }
                      return null;
                    })
                }
                    </div>
                </Scroller>
            </div>
        </div>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.string.isRequired,
};


function select() {
  return {
  };
}

export default connect(select)(Gallery);
