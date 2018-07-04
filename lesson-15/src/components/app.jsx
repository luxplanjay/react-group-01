import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Nav from './nav';
import Loader from './loader';

const AsyncHome = Loadable({
  loader: () => import('./pages/home' /* webpackChunkName: "home-page" */),
  loading: Loader,
});

const AsyncPosts = Loadable({
  loader: () => import('./pages/posts' /* webpackChunkName: "posts-page" */),
  loading: Loader,
});

const AsyncProfile = Loadable({
  loader: () =>
    import('./pages/profile' /* webpackChunkName: "profile-page" */),
  loading: Loader,
});

const AsyncNotFound = Loadable({
  loader: () =>
    import('./pages/not-found' /* webpackChunkName: "not-found-page" */),
  loading: Loader,
});

export default () => (
  <div>
    <Nav />

    <Switch>
      <Route path="/" exact component={AsyncHome} />
      <Route path="/posts" exact component={AsyncPosts} />
      <Route path="/profile" exact component={AsyncProfile} />
      <Route component={AsyncNotFound} />
    </Switch>
  </div>
);
