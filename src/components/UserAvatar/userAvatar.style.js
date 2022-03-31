import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => `${size / 2}px`};
  /* margin-right: 0.8rem; */
`;

export const Name = styled.h4`
  font-size: 0.9rem;
`;
