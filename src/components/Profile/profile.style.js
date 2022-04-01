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

export const Photo = styled.div`
  height: 340px;
  width: 240px;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: center;
  background-size: cover;
`;
