const session = store => next => action => {
  if (action.type && action.type === 'SAVE_SESSION') {
    localStorage.setItem('session', JSON.stringify(store.getState().session));
  }

  next(action);
};

export default session;
