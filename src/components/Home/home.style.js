import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
`;

export const ContentPhotos = styled.div`
  width: 80%;
`;

export const ContentUser = styled.div`
  width: 20%;

  .content-user-info {
    outline: 1px solid red;
    justify-content: center;
    display: flex;
    gap: 1rem;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  }

  .content-user-suggestion {
    outline: 1px solid red;

    .suggestion-user {
      outline: 1px solid blue;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        gap: 1rem;
      }

      img {
        margin: 5px;
        width: 40px;
        border-radius: 20px;
      }
    }
  }
`;
