import styled from 'styled-components';

export const Wrapper = styled.div`
  h5 {
    margin-bottom: 1.2rem;
    color: var(--darkGray);
  }
`;

export const SuggestionsListWrapper = styled.div`
  margin: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FollowBtn = styled.button`
  border: none;
  background-color: transparent;
  color: var(--mainBlue);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;
