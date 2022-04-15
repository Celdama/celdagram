import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 0.9rem;
`;

export const UserPhotos = styled.div`
  outline: 1px solid red;
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
    z-index: 10;
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
