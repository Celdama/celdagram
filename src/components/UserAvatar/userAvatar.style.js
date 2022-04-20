import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--black);
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-size: 1.1rem;
    text-transform: lowercase;
  }
`;

export const Avatar = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => `${size / 2}px`};
`;
