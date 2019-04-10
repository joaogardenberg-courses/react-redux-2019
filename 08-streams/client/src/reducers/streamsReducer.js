import _ from 'lodash';

import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DESTROY_STREAM
} from '../actions/types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') };
    case FETCH_STREAM:
    case CREATE_STREAM:
    case UPDATE_STREAM:
      return { ...state, [payload.id]: payload };
    case DESTROY_STREAM:
      return _.omit(state, payload);
    default:
      return state;
  }
};