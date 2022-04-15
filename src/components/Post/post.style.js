import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 504px;
  margin-bottom: 3rem;
  outline: 1px solid var(--borderGray);
  background-color: var(--white);
  border-radius: 4px;
`;

export const AvatarWrapper = styled.div`
  padding: 0 0.6rem;
`;

export const Photo = styled.img`
  width: 100%;
  height: 600px;
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
