import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 2rem 0;
`;

export const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    gap: 1rem;

    .icon {
      height: 1.25rem;
    }

    img {
      height: 22px;
      border-radius: 11px;
    }
  }
`;
