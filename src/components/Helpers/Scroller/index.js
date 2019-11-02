/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReactScroller from 'react-custom-scrollbars';

import { SET_MENU_SCROLLED, RESET_MENU } from '../../../redux/actions/actions';

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
      const { MenuScrolled } = this.props;

      // this.props.dispatch(SET_SCROLL_POS(scrollTop));
      if (scrollTop === 0) this.props.dispatch(RESET_MENU());
      else if (!MenuScrolled) this.props.dispatch(SET_MENU_SCROLLED());
    };

    render() {
      const { thumbGrab } = this.state;

      return (
          <ReactScroller
            ref={(el) => this.Scroller = el}
            className='Scroller'
            onScroll={this.handleScroll}
            renderThumbVertical={(props) => (
                <div
                  role='presentation'
                  className={classnames('thumb', { grab: thumbGrab })}
                  onMouseDown={this.onThumbMouseDown}
                  onMouseUp={this.onThumbMouseUp}
                  {...props}
                >
                    <div className='ScrollButton' />
                    <div className='ScrollButton' />
                    <div className='ScrollButton' />
                </div>
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
  MenuScrolled: PropTypes.bool.isRequired,
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
    MenuScrolled: store.viewReducer.MenuScrolled,
    pos: store.viewReducer.ScrollPos,
  };
}

export default connect(select)(Scroller);
