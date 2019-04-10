import history from '../history';
import streams from '../apis/streams';

import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DESTROY_STREAM
} from './types';

export const signIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await streams.get('');
  dispatch({ type: FETCH_STREAMS, payload: data });
};

export const fetchStream = (id) => async (dispatch) => {
  const { data } = await streams.get(`/${id}`);
  dispatch({ type: FETCH_STREAM, payload: data });
};

export const createStream = (values) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data }   = await streams.post('', { ...values, userId });
  dispatch({ type: CREATE_STREAM, payload: data });
  history.push('/');
};

export const updateStream = (id, values) => async (dispatch) => {
  const { data } = await streams.patch(`/${id}`, values);
  dispatch({ type: UPDATE_STREAM, payload: data });
  history.push('/');
};

export const destroyStream = (id) => async (dispatch) => {
  await streams.delete(`/${id}`);
  dispatch({ type: DESTROY_STREAM, payload: id });
  history.push('/');
};