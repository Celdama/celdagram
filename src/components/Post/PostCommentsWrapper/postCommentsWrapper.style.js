import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.2rem;

  li {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: space-between;

    .icon {
      height: 1.4rem;
      cursor: pointer;
    }
  }

  .author {
    font-weight: bold;
  }
`;
