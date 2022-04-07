import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { ImgWrapper } from './ImgWrapper';
import { Filter } from './Filter';
// import { NormalFilter } from './NormalFilter';
import { CustomFilter } from './CustomFilter';

const HomeStyles = styled.div`
  background-color: #2b2f38;
  color: #f1d8c4;
  width: 100%;
  height: 100vh;
  .filters-container {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const TestFilter = () => {
  const [filterClass, setFilterClass] = useState('filter-normal');
  const [openCustom, setOpenCustom] = useState(false);

  const imgRef = useRef(null);

  return (
    <HomeStyles>
      <ImgWrapper
        filterClass={filterClass}
        openCustom={openCustom}
        imgRef={imgRef}
      />
      <div className='filters-container'>
        {/* <NormalFilter
          filterClass={filterClass}
          setFilterClass={setFilterClass}
        /> */}
        <Filter
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          imgRef={imgRef}
        />
        {/* <CustomFilter
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          setOpenCustom={setOpenCustom}
        /> */}
      </div>
    </HomeStyles>
  );
};
