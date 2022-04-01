import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 5rem;
  border-bottom: 1px solid lightgray;
  gap: 4rem;

  .avatar {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: #184e77;
      color: #fff;
      border: none;
      padding: 0.18rem 0.5rem;
      border-radius: 4px;

      :hover {
        cursor: pointer;
      }
    }

    h4 {
      padding: 0;
      margin: 0;
    }
  }
  .social {
    display: flex;
    gap: 1.3rem;
    margin: 0.4rem 0;
  }
  .name {
    margin: 0;
  }
`;
