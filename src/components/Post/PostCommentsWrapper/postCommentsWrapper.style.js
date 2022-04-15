import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.2rem;

  li {
    display: flex;
    gap: 4px;
  }

  .author {
    font-weight: bold;
  }
`;
