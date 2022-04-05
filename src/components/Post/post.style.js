import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 504px;
  margin-bottom: 30px;
  outline: 1px solid lightgray;
  background-color: #fff;
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
    font-size: 0.68rem;
    color: #6c757d;
    font-weight: bold;
    cursor: pointer;
  }
`;
