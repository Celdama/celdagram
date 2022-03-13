import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 2rem 0;
`;

export const Content = styled.div`
  max-width: 80rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    gap: 2rem;
  }
`;
