import axios from 'axios';

const api = ({ dispatch }) => next => action => {
  const withApi = action.type === 'API_REQUEST';

  if (!withApi) return next(action);

  next(action);

  const {
    url,
    method,
    body = {},
    onStart,
    onSuccess,
    onError,
  } = action.meta.api;

  dispatch(onStart());

  return axios[method](url, body)
    .then(({ data }) => dispatch(onSuccess(data)))
    .catch(({ response }) => dispatch(onError(response)));
};

export default api;
