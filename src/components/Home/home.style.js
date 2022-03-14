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
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  }

  .content-user-suggestion {
    .suggestion-user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
      }
    }
  }
`;
