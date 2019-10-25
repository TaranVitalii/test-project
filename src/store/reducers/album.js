import {successAction, failureAction} from '../types';
import {GET_ALBUM} from '../constants.js';

const initialState = {
  data: [],
};

export default function album(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
      };
    case successAction(GET_ALBUM):
      return {
        data: action.payload,
      };
    case failureAction(GET_ALBUM):
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
