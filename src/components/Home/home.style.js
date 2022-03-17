import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
`;

export const ContentUser = styled.div`
  width: 100%;
  padding-left: 1.4rem;

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
    h5 {
      margin-bottom: 0.4rem;
      color: gray;
    }
    .suggestion-user {
      margin: 0;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      button {
        border: none;
        background-color: transparent;
        color: #184e77;
        font-weight: bold;
        font-size: 0.7rem;

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;
