import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  height: 3.6rem;
  padding: 0;
  border-top: 1px solid var(--borderGray);

  form {
    height: 100%;
    display: flex;
  }

  input {
    width: 90%;
    padding: 0 0.6rem;
    border: none;
    outline: none;
    font-size: 1rem;
  }
`;

export const PostBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 10%;
  color: var(--darkGray);
  font-size: 1rem;
  cursor: pointer;
`;
