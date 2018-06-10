import React, { Component } from 'react';
import Toggle, { ToggleConsumer } from './Toggle';
import ArticlesList from './ArticlesList';
import articles from '../articles';

const Layer3 = () => (
  <ToggleConsumer>
    {({ on, toggle }) => (
      <div>
        <button onClick={toggle}>{on ? '👆' : '👇'}</button>
        {on && <p>Some Content</p>}
      </div>
    )}
  </ToggleConsumer>
);

const Layer2 = () => (
  <ToggleConsumer>
    {({ on }) => (
      <div>
        {on ? 'conten visible' : 'content hidden'}
        <Layer3 />
      </div>
    )}
  </ToggleConsumer>
);

const Layer1 = () => (
  <div>
    <Layer2 />
  </div>
);

const App = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>React Code Reuse Patterns</h1>
    <Toggle>{() => <Layer1 />}</Toggle>
    <ArticlesList articles={articles} />
  </div>
);

/* const App = props => (
  <Container>
    <h1 style={{ textAlign: 'center' }}>React Code Reuse Patterns</h1>
    <Grid>
      <div>
        Aenean massa. Pellentesque ut neque. Sed mollis, eros et ultrices
        tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
        Cras varius.
      </div>
      <div>
        Aenean massa. Pellentesque ut neque. Sed mollis, eros et ultrices
        tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
        Cras varius.
      </div>
      <div>
        Aenean massa. Pellentesque ut neque. Sed mollis, eros et ultrices
        tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
        Cras varius.
      </div>
      <div>
        Aenean massa. Pellentesque ut neque. Sed mollis, eros et ultrices
        tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
        Cras varius.
      </div>
    </Grid>
  </Container>
); */

export default App;
