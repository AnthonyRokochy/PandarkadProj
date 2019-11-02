import {
  // call,
  put,
  // delay,
  //
} from 'redux-saga/effects';
import * as ActionTypes from '../../consts/actionTypes';
import {
  // SHOW_SNACKBAR,
  SHOW_LOADER,
  CLOSE_LOADER,
  SET_LANG,
  OPEN_MAIN,
  OPEN_PAGE,
} from '../actions/actions';
import GalleriesDescription from '../../description/galleries';

const sagas = {
  * [ActionTypes.OPEN](action) {
    const openedPage = document.location.pathname.slice(1);
    if (openedPage) {
      const page = _.find(GalleriesDescription, (item) => item.name === openedPage);
      console.log(page);
      yield put(OPEN_PAGE(page));
    } else yield put(OPEN_MAIN(action.params));
  },
  * [ActionTypes.CHANGE_LANG](action) {
    yield put(SHOW_LOADER());
    yield put(SET_LANG(action.lang));
    yield put(CLOSE_LOADER());
  },
};

export default sagas;
