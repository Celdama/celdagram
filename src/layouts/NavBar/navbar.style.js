import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 2rem;
`;

export const Content = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Dancing Script', cursive;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  ul {
    display: flex;
    gap: 1rem;

    .icon {
      height: 1.8rem;
      cursor: pointer;
    }

    img {
      height: 28px;
      width: 28px;
      border-radius: 14px;
      cursor: pointer;
    }
  }
`;
