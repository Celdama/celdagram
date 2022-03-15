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

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    display: flex;
    gap: 1rem;

    .icon {
      height: 1.25rem;
      color: #000;

      :hover {
        cursor: pointer;
      }
    }

    img {
      height: 22px;
      border-radius: 11px;

      :hover {
        cursor: pointer;
      }
    }
  }
`;
