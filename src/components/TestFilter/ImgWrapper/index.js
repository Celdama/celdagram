import React from 'react';
import styled from 'styled-components';

import { CustomFilterOptions } from '../CustomFilterOptions';

const ImgWrapperStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .img-container {
    width: fit-content;
    max-width: 80%;
    height: 360px;
    margin: auto;
    margin-bottom: 4rem;
    box-shadow: 0 8px 15px var(--deep-dark);
    border: 1px solid var(--deep-dark);
    border-radius: 6px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 6px;
    }
  }
`;

export const ImgWrapper = ({ filterClass, openCustom, imgRef }) => {
  return (
    <ImgWrapperStyles>
      <figure className='img-container'>
        <img
          src='https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt=''
          ref={imgRef}
          className={filterClass}
        />
      </figure>
      {openCustom && <CustomFilterOptions imgRef={imgRef} />}
    </ImgWrapperStyles>
  );
};
