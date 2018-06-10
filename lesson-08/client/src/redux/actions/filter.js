/* eslint-disable */
import { CHANGE_FILTER } from './types';

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
