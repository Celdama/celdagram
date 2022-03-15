import styled from 'styled-components';

export const Wrapper = styled.article`
  /* height: 800px; */
  width: 504px;
  margin-bottom: 30px;
  outline: 1px solid lightgray;
  background-color: #fff;
  border-radius: 4px;

  .icon {
    height: 1.25rem;
    width: 1.25rem;
  }

  .icons-wrapper,
  .likes-wrapper {
    padding: 0;
    font-size: 0.9rem;
  }

  .content-post {
    padding: 0.3rem 0.6rem;
  }

  .likes-wrapper {
    margin: 0.4rem 0;
    font-weight: bold;
  }

  .like {
    color: red;
  }

  .date-wrapper {
    padding: 0.4rem 0;
    font-size: 0.68rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #6c757d;
  }

  .add-comment-wrapper {
    margin: 0;
    height: 36px;
    padding: 0;
    border-top: 1px solid lightgray;
    display: flex;

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
  }

  .comments-wrapper {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 0.9rem;

    .author {
      font-weight: bold;
    }
  }

  div {
    padding-left: 0.6rem;
  }

  .photo {
    width: 100%;
    height: 600px;
  }

  p {
    margin: 0;
  }
`;
