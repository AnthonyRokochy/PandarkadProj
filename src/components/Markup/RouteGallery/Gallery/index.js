/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-destructuring */
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
  render() {
    const { data } = this.props;
    return (
        <div className='Gallery'>
            <div className='ViewerContainer'>
                <div className={classnames('LeftButton', 'noselect', 'blink')}>{'<'}</div>
                <div className='Viewer'>
                    <img src='https://i.imgur.com/lV86HKa.jpg' alt='background img' />
                </div>
                <div className={classnames('RightButton', 'noselect', 'blink')}>{'>'}</div>
            </div>
            <div className='ImagesGallery'>
                <Scroller>
                    <div className={classnames('ImagesContainer', 'noselect')}>
                        {
                    _.map(GalleriesDescription, (item) => {
                      if (item.name === data) {
                        return _.map(item.urls, (i) => {
                          console.log(i);
                          return (
                              <ImagesItem
                                sorce={i}
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

            {/* <div className='GalleryOpacity' /> */}
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
