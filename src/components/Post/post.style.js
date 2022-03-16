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
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 3px;

  .icon {
    height: 1.25rem;
  }

  .like {
    color: red;
  }
`;

export const LikesWrapper = styled.div`
  margin: 0.4rem 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const CommentsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.9rem;

  .author {
    font-weight: bold;
  }
`;

export const DateWrapper = styled.div`
  padding: 0.4rem 0;
  font-size: 0.68rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #6c757d;
`;

export const AddCommentWrapper = styled.div`
  margin: 0;
  height: 36px;
  padding: 0;
  border-top: 1px solid lightgray;

  form {
    height: 100%;
    display: flex;
  }

  input {
    width: 90%;
    padding: 0 0.6rem;
    border: none;
  }

  button {
    border: none;
    font-size: 0.7rem;
    background-color: transparent;
    width: 10%;
    color: #6c757d;

    :hover {
      cursor: pointer;
    }
  }
`;
