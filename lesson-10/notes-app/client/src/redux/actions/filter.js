import { CHANGE_CONTENT_FILTER, CHANGE_PRIORITY_FILTER } from './types';

export const changeContentFilter = filter => ({
  type: CHANGE_CONTENT_FILTER,
  payload: filter,
});

export const changePriorityFilter = filter => ({
  type: CHANGE_PRIORITY_FILTER,
  payload: filter,
});
