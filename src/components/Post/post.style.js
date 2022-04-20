import styled from 'styled-components';

export const Wrapper = styled.article`
  margin-bottom: 3rem;
  outline: 1px solid var(--borderGray);
  background-color: var(--white);
  border-radius: 4px;
`;

export const AvatarWrapper = styled.div`
  padding: 0 0.6rem;
`;

export const ContentPost = styled.div`
  padding: 0.5rem 0.6rem;

  .show-all-comments {
    font-size: 1.2rem;
    outline: 1px solid red;
    color: var(--darkGray);
    font-weight: bold;
    cursor: pointer;
  }
`;
