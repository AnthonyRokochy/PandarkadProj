import * as ActionTypes from '../../consts/actionTypes';

export const RESET_APP = () => {
  return { type: ActionTypes.RESET_APP };
};
export const OPEN = (params) => {
  return {
    type: ActionTypes.OPEN,
    params,
  };
};
export const OPEN_MAIN = (params) => {
  return {
    type: ActionTypes.OPEN_MAIN,
    params,
  };
};
export const SHOW_LOADER = () => {
  return { type: ActionTypes.SHOW_LOADER };
};
export const CLOSE_LOADER = () => {
  return { type: ActionTypes.CLOSE_LOADER };
};
export const CHANGE_LANG = (lang) => {
  return {
    type: ActionTypes.CHANGE_LANG,
    lang,
  };
};
export const SET_LANG = (lang) => {
  return {
    type: ActionTypes.SET_LANG,
    lang,
  };
};
export const SET_GALLERY_SCROLLED = () => {
  return { type: ActionTypes.SET_GALLERY_SCROLLED };
};
export const RESET_GALLERY = () => {
  return { type: ActionTypes.RESET_GALLERY };
};
export const OPEN_PAGE = (page) => {
  return {
    type: ActionTypes.OPEN_PAGE,
    page,
  };
};
export const SET_SCROLL_POS = (pos) => {
  return {
    type: ActionTypes.SET_SCROLL_POS,
    pos,
  };
};
