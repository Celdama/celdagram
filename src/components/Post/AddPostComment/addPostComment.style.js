import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  height: 36px;
  padding: 0;
  border-top: 1px solid lightgray;

  form {
    height: 100%;
    display: flex;
  }

  input {
    width: 90%;
    padding: 0 0.6rem;
    border: none;
  }

  button {
    border: none;
    font-size: 0.7rem;
    background-color: transparent;
    width: 10%;
    color: #6c757d;
    cursor: pointer;
  }
`;
