import styled from 'styled-components';

const GridLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(255 255 255 / 0.1);
  pointer-events: none;
`;

export default function Grid() {
  return <GridLayer />;
}
