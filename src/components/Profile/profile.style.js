import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 0.9rem;
  /* font-weight: 600; */
  .user-info {
    display: flex;
    align-items: center;
    padding: 1.2rem 5rem;
    border-bottom: 1px solid lightgray;
    gap: 4rem;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: #184e77;
      color: #fff;
      border: none;
      padding: 3px 8px;
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

  .avatar {
    height: 100px;
    border-radius: 50px;
  }

  .photos-container {
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: flex-start;
  }
`;

export const Photo = styled.div`
  height: 340px;
  width: 240px;
  background-image: ${({ urlImg }) => `url(${urlImg})`};
  background-position: center;
  background-size: cover;
`;
