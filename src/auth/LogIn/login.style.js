import styled from 'styled-components';

export const Wrapper = styled.div`
  outline: 1px solid red;
`;

export const Content = styled.div`
  outline: 1px solid blue;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: red;

    :hover {
      color: blue;
    }
  }
`;
