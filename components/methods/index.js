import React from 'react';
import styled from 'styled-components';

export const Cut = (Component, { width, height }) => styled(Component)`
  width: ${width};
  height: ${height};
`;

export const Fry = (Component, { color }) => styled(Component)`
  color: ${color};
`;
