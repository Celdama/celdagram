import styled from 'styled-components';
import breakpoint from '../../Helpers/breakpoints';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;

  h1 {
    font-size: 1.8rem;
  }

  .active {
    border: none;
  }

  .active:hover #cancel-btn {
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media screen and (min-width: ${breakpoint.sm}) {
    flex-direction: row;
    align-items: flex-start;
  }

  .form-post-wrapper {
    background-color: aliceblue;
    width: 100%;
    max-width: 520px;

    display: flex;
    flex-direction: column;
  }

  .filter-container {
    max-width: 500px;
    margin-top: 2rem;

    @media screen and (min-width: ${breakpoint.sm}) {
      width: 350px;
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

export const PreviewUpload = styled.div`
  cursor: pointer;
  position: relative;
  height: 65rem;
  width: 100%;
  border-radius: 10px;
  background: transparent;
  border: 2px dashed var(--previewUploadBorder);
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
    font-size: 1.4rem;
    color: var(--black);
    font-weight: 500;
  }
`;

export const CancelBtnContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  background-color: var(--white);
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 2.2rem;
  cursor: pointer;
  opacity: 0;
`;

export const Form = styled.form`
  .caption {
    margin-top: 2rem;
    display: flex;

    input {
      outline: none;
      width: 100%;
      border: none;
      background-color: transparent;
      padding: 0.25rem;
    }
  }
`;

export const ShareBtn = styled.button`
  border: none;
  background-color: transparent;
  color: var(--mainBlue);
  font-weight: bold;
  padding: 0.18rem 0.5rem;
  cursor: pointer;
`;
