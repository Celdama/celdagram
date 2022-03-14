import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: ${({ size }) => `${size}px`};
  border-radius: 25px;
`;

export const Name = styled.h4``;
