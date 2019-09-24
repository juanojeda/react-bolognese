import React from 'react';
import styled from 'styled-components';

export const Milk = styled.div`
  height: ${({ ml }) => ml}px;
`;

export const PastaSheet = styled.div`
  color: wheat;
`;

export const Spaghetti = styled(PastaSheet)`
  width: 2mm;
  height: 100%;
`;

export const Bowl = ({ children }) => <div>{children}</div>;
