import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  height: 60vh;
  place-items: center;
  text-align: center;

  h1 {
    font-size: 18px;
  }

  .active {
    border: none;
  }

  .active:hover #cancel-btn {
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;

  .form-post-wrapper {
    width: 65%;
    display: flex;
    flex-direction: column;
  }

  .filter-container {
    width: 35%;
    .filter-container-nav {
      width: 100%;
      display: flex;
      justify-content: center;
      outline: 1px solid black;

      span {
        width: 50%;
      }
    }
  }
`;

export const PreviewUpload = styled.div`
  cursor: pointer;
  position: relative;
  height: 350px;
  width: 100%;
  border-radius: 10px;
  background: transparent;
  border: 2px dashed #c2cdda;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const PreviewImgContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const PreviewTxtContainer = styled.div`
  p {
    margin: 0;
    font-size: 14px;
    color: #000;
    font-weight: 500;
  }
`;

export const CancelBtnContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: #fff;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  cursor: pointer;
  opacity: 0;
`;

export const Form = styled.form`
  .caption {
    margin-top: 20px;
    display: flex;

    input {
      outline: none;
      width: 100%;
      border: none;
      background-color: transparent;
      padding: 2.5px;
    }
  }
`;

export const ShareBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #184e77;
  font-weight: bold;
  padding: 0.18rem 0.5rem;
  cursor: pointer;
`;
