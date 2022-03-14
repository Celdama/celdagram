import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: ${({ size }) => `${size}px`};
  border-radius: 25px;
  margin-right: 0.8rem;
`;

export const Name = styled.h4`
  font-size: 0.9rem;
`;
