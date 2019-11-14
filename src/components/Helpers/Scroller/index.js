/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReactScroller from 'react-custom-scrollbars';

import { SET_GALLERY_SCROLLED, RESET_GALLERY } from '../../../redux/actions/actions';

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbGrab: false,
      //
    };
  }

  componentDidUpdate(prevProps) {
    const { pos } = this.props;
    if (prevProps.pos !== pos) {
      this.Scroller.scrollTop(pos);
    }
  }

    onThumbMouseUp = () => {
      this.setState({ thumbGrab: false });
    };

    onThumbMouseDown = () => {
      this.setState({ thumbGrab: true });
    };

    handleScroll = (e) => {
      const { scrollTop } = e.target;
      const { GalleryScrolled } = this.props;

      if (scrollTop === 0) this.props.dispatch(RESET_GALLERY());
      else if (!GalleryScrolled) this.props.dispatch(SET_GALLERY_SCROLLED());
    };

    render() {
      const { thumbGrab } = this.state;

      return (
          <ReactScroller
            ref={(el) => this.Scroller = el}
            className='Scroller'
            onScroll={this.handleScroll}
            renderView={(props) => <div {...props} className='view'>{ props.children }</div>}
            renderThumbVertical={(props) => (
                <div
                  role='presentation'
                  className={classnames('thumb', { grab: thumbGrab })}
                  onMouseDown={this.onThumbMouseDown}
                  onMouseUp={this.onThumbMouseUp}
                  {...props}
                />
            )}
            renderTrackVertical={(props) => <div {...props} className='track' />}
          >
              {this.props.children}
          </ReactScroller>
      );
    }
}

Scroller.propTypes = {
  children: PropTypes.any,
  dispatch: PropTypes.func.isRequired,
  GalleryScrolled: PropTypes.bool.isRequired,
  pos: PropTypes.number,
  //
};

Scroller.defaultProps = {
  children: [],
  pos: 0,
  //
};

function select(store) {
  return {
    // lang: store.viewReducer.lang,
    dict: store.viewReducer.dict,
    GalleryScrolled: store.viewReducer.GalleryScrolled,
    pos: store.viewReducer.ScrollPos,
  };
}

export default connect(select)(Scroller);
