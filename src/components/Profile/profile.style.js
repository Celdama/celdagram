import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 0.9rem;
`;

export const UserPhotos = styled.div`
  padding: 1.2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  color: white;

  .stats {
    display: flex;
    justify-content: space-around;
    opacity: 0;
    gap: 20px;
    position: absolute;
    top: 45%;
    width: 70%;
  }

  :hover {
    opacity: 0.9;
    .stats {
      opacity: 1;
    }
  }

  p {
    display: flex;
    gap: 10px;

    svg {
      height: 1.25rem;
    }
  }

  .trash-icon {
    cursor: pointer;
  }
`;

export const Photo = styled.div`
  height: 340px;
  width: 240px;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: center;
  background-size: cover;
`;
