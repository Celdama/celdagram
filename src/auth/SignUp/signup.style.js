import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 250px;
  display: flex;
  padding: 10px 20px 20px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid lightgray;
  border-radius: 2px;

  h1 {
    margin-bottom: 8px;
    font-size: 1.3rem;
  }

  form {
    width: 100%;
    input {
      width: 100%;
      background-color: #faf9fa;
      border: 1px solid lightgray;
      border-radius: 3px;
      padding: 4px;
      margin: 4px 0;
    }

    button {
      width: 100%;
      border: none;
      background-color: #184e77;
      color: #fff;
      font-weight: bold;
      border-radius: 3px;
      padding: 4px;
      margin-top: 4px;
      cursor: pointer;
    }
  }
`;

export const SubContent = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  width: 250px;
  margin-top: 20px;
  outline: 1px solid lightgray;
  border-radius: 2px;
  font-size: 0.9rem;

  a {
    text-decoration: none;
    color: #184e77;
    font-weight: bold;
  }
`;
