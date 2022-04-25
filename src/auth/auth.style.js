import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  background-color: var(--white);
  width: 25rem;
  display: flex;
  padding: 1rem 2rem 2rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid var(--borderGray);
  border-radius: 2px;
  h1 {
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
  }

  span {
    font-size: 0.9rem;
    font-style: italic;
    align-self: flex-end;
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
    background-color: var(--inputBgColor);
    border: 1px solid var(--borderGray);
    border-radius: 3px;
    padding: 0.4rem;
    margin: 0.4rem 0;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  border: none;
  background-color: var(--mainBlue);
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  padding: 4px;
  margin-top: 4px;
  cursor: pointer;
`;

export const SubFormContent = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  width: 25rem;
  margin-top: 2rem;
  outline: 1px solid var(--borderGray);
  border-radius: 2px;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: var(--mainBlue);
    font-weight: bold;
  }
`;
