import React, { Component } from 'react';
import Loadable from 'react-loadable';
import PostList from '../post-list';
import Loader from '../loader';

const AsyncPostEditor = Loadable({
  loader: () => import('../post-editor' /* webpackChunkName: "post-editor" */),
  loading: Loader,
});

const posts = [
  {
    id: 1,
    title: 'Curabitur blandit',
    body:
      'Pellentesque dapibus hendrerit tortor. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Morbi ac felis. Etiam imperdiet imperdiet orci.',
  },
  {
    id: 2,
    title: 'Donec vitae orci',
    body:
      'Aenean ut eros et nisl sagittis vestibulum. Maecenas egestas arcu quis ligula mattis placerat. Nullam sagittis. Suspendisse non nisl sit amet velit hendrerit rutrum.',
  },
  {
    id: 3,
    title: 'Etiam',
    body:
      'Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Proin magna. Aenean massa.',
  },
];

export default class PostsPage extends Component {
  state = {
    editorVisible: false,
  };

  showEditor = () => {
    this.setState({ editorVisible: true });
  };

  hideEditor = () => {
    this.setState({ editorVisible: false });
  };

  render() {
    const { editorVisible } = this.state;

    return (
      <div>
        <h1>Posts Page</h1>

        <PostList posts={posts} />

        {editorVisible ? (
          <AsyncPostEditor onCancel={this.hideEditor} />
        ) : (
          <button onClick={this.showEditor}>Create post</button>
        )}
      </div>
    );
  }
}
