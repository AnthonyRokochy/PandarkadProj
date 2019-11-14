import {
  put,
} from 'redux-saga/effects';
import * as ActionTypes from '../../consts/actionTypes';
import {
  SHOW_LOADER,
  CLOSE_LOADER,
  SET_LANG,
} from '../actions/actions';

const sagas = {
  * [ActionTypes.CHANGE_LANG](action) {
    yield put(SHOW_LOADER());
    yield put(SET_LANG(action.lang));
    yield put(CLOSE_LOADER());
  },
};

export default sagas;
