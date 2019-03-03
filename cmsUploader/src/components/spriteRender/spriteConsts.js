import styled from 'styled-components';

export  const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  overflow: hidden;
  transform: scale(${({ scale }) => `${scale}, ${scale}`});
  transform-origin: top left;
`;

export const Image = styled.img`
  transform: translate(-${({ left }) => left}px, 0);
`;