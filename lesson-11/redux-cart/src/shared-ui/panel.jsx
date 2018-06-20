import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: inline-flex;
  padding: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
`;

const Panel = ({ children }) => <Section>{children}</Section>;

export default Panel;
