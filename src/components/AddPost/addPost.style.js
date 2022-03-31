import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  height: 60vh;
  place-items: center;
  text-align: center;

  h1 {
    font-size: 18px;
  }

  .container {
    height: 350px;
    width: 450px;

    .wrapper.active {
      border: none;
    }

    .wrapper.active:hover #cancel-btn {
      opacity: 1;
    }

    .wrapper {
      cursor: pointer;
      position: relative;
      height: 300px;
      width: 100%;
      border-radius: 10px;
      background: transparent;
      border: 2px dashed #c2cdda;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      .image {
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
      }

      .icon {
        font-size: 100px;
        color: #000;
      }

      .text {
        font-size: 16px;
        color: #000;
        font-weight: 500;
      }

      #cancel-btn {
        position: absolute;
        right: 15px;
        top: 15px;
        background-color: #fff;
        border-radius: 11px;
        display: flex;
        /* margin: auto; */
        align-items: center;
        justify-content: center;
        height: 22px;
        width: 22px;
        cursor: pointer;
        opacity: 0;
        /* display: none; */
      }

      .file-name {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 8px 0;
        font-size: 18px;
        color: #fff;
        background: linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%);
      }
    }

    #custom-btn {
      margin-top: 30px;
      width: 100%;
      outline: none;
      height: 50px;
      display: block;
      border: none;
      border-radius: 25px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      background: linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%);
    }

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

    button {
      border: none;
      background-color: transparent;
      /* background-color: #184e77; */
      color: #184e77;
      font-weight: bold;
      border: none;
      padding: 0.18rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
