/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ImagesItem from './ImagesItem';
import Scroller from '../../../Helpers/Scroller';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Gallery extends Component {
  render() {
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
                        <ImagesItem sorce='https://i.imgur.com/5btqks9.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/RfZADlZ.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/U54Rosh.png' />
                        <ImagesItem sorce='https://i.imgur.com/ws2K5Gd.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/OrbCM0u.png' />
                        <ImagesItem sorce='https://i.imgur.com/OhzQB2q.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/SzH8TXj.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/mQkHifY.jpg?1' />
                        <ImagesItem sorce='https://i.imgur.com/Dqh0tyX.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/5btqks9.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/RfZADlZ.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/U54Rosh.png' />
                        <ImagesItem sorce='https://i.imgur.com/ws2K5Gd.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/OrbCM0u.png' />
                        <ImagesItem sorce='https://i.imgur.com/OhzQB2q.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/SzH8TXj.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/mQkHifY.jpg?1' />
                        <ImagesItem sorce='https://i.imgur.com/Dqh0tyX.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/5btqks9.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/RfZADlZ.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/U54Rosh.png' />
                        <ImagesItem sorce='https://i.imgur.com/ws2K5Gd.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/OrbCM0u.png' />
                        <ImagesItem sorce='https://i.imgur.com/OhzQB2q.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/SzH8TXj.jpg' />
                        <ImagesItem sorce='https://i.imgur.com/mQkHifY.jpg?1' />
                        <ImagesItem sorce='https://i.imgur.com/Dqh0tyX.jpg' />
                    </div>
                </Scroller>
            </div>

            {/* <div className='GalleryOpacity' /> */}
        </div>
    );
  }
}

// Gallery.propTypes = {
//   match: PropTypes.object.isRequired,
// };


function select() {
  return {
  };
}

export default connect(select)(Gallery);
