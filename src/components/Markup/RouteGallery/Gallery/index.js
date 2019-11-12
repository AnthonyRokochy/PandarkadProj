/* eslint-disable react/jsx-boolean-value */
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

  componentWillMount() {
    _.map(GalleriesDescription, (item) => {
      if (item.name === this.props.data) {
        this.arrUrls = item.urls.slice();
      }
      return null;
    });
  }

  ImageClick(key) {
    this.setState({
      itemKey: key,
    });
  }

  LeftClick() {
    let previousKey = this.state.itemKey;
    if (previousKey === 0) {
      this.setState({
        itemKey: previousKey,
      });
    } else {
      this.setState({
        itemKey: --previousKey,
      });
    }
  }

  RightClick() {
    let previousKey = this.state.itemKey;
    console.log(this.arrUrls.length);
    if (this.state.itemKey < (this.arrUrls.length - 1)) {
      this.setState({
        itemKey: ++previousKey,
      });
    }
  }

  render() {
    return (
        <div className='Gallery'>
            <div className='ViewerContainer'>
                <div onClick={this.LeftClick} className={classnames('LeftButton', 'noselect', 'blink')}>{'<'}</div>
                <div className='Viewer'>
                    {
                      _.map(this.arrUrls, (item, key) => {
                        if (key === this.state.itemKey) {
                          return (
                              <img src={item} alt='background img' />
                          );
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
                    _.map(this.arrUrls, (item, key) => {
                      if (key === this.state.itemKey) {
                        return (
                            <ImagesItem
                              urls={item}
                              id={key}
                              isSelected={true}
                              onClick={() => this.ImageClick(key)}
                            />
                        );
                      }
                      return (
                          <ImagesItem
                            urls={item}
                            id={key}
                            isSelected={false}
                            onClick={() => this.ImageClick(key)}
                          />
                      );
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
