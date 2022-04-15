import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.div``;

export const UserPhotos = styled.div`
  padding: 1.2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  color: var(--white);

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 1;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .stats {
    display: flex;
    justify-content: space-around;
    opacity: 0;
    position: absolute;
    top: 45%;
    width: 70%;
    z-index: 10;
    font-size: 1.8rem;

    p {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        height: 2rem;
      }

      .trash-icon {
        cursor: pointer;
      }
    }
  }

  :hover {
    &::before {
      opacity: 1;
    }
    .stats {
      opacity: 1;
    }
  }
`;

export const Photo = styled.div`
  height: 540px;
  width: 100%;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 500px) {
    height: 340px;
  }
`;

export const DefaultBtn = styled.button`
  padding: 0.5rem 0.4rem;
  border: none;
  border-radius: 4px;
  color: var(--white);
  text-transform: capitalize;
  cursor: pointer;
  font-size: 1.1rem;
`;

export const DeleteBtn = styled(DefaultBtn)`
  background-color: var(--redColor);
`;

export const EditBtn = styled(DefaultBtn)`
  background-color: var(--mainBlue);
`;
