import React, { useEffect } from 'react';
import { FiltersStyles } from './filter.style';
import { NormalFilter } from '../NormalFilter';

import '../instagram.min.css';

export const Filter = ({
  filterClass,
  // setFilterClass,
  setPostData,
  imgPreview,
}) => {
  useEffect(() => {
    const divImg = imgPreview.current;
    divImg.style.filter = '';
  }, [filterClass]);

  const filters = [
    {
      name: 'Original',
      class: 'filter-original',
    },
    {
      name: 'Aden',
      class: 'filter-aden',
    },
    {
      name: 'Clarendon',
      class: 'filter-clarendon',
    },
    {
      name: 'Crema',
      class: 'filter-crema',
    },
    {
      name: 'Gingham',
      class: 'filter-gingham',
    },
    {
      name: 'Lark',
      class: 'filter-lark',
    },
    {
      name: 'Ludwing',
      class: 'filter-ludwing',
    },
    {
      name: 'Moon',
      class: 'filter-moon',
    },
    {
      name: 'Perpetua',
      class: 'filter-perpetua',
    },
    {
      name: 'Reyes',
      class: 'filter-reyes',
    },
    {
      name: 'Slumber',
      class: 'filter-slumber',
    },
    {
      name: 'Willow',
      class: 'filter-willow',
    },
  ];

  return (
    <FiltersStyles>
      {filters.map((filter, index) => {
        return (
          <div key={index}>
            <div
              className={`filter-item ${
                filterClass === filter.class ? 'filter-item--selected' : ''
              }`}
              // onClick={() => setFilterClass(filter.class)}
              onClick={() =>
                setPostData((prevState) => {
                  return {
                    ...prevState,
                    filterClass: filter.class,
                  };
                })
              }
            >
              <div className='filter-item__img'>
                <img
                  src='https://images.unsplash.com/photo-1417978855732-192f9006c46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbG9vbiUyMGZsaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                  alt={filter.name}
                  className={filter.class}
                />
              </div>
              <div className='filter-item__name'>
                <p>
                  <strong>{filter.name}</strong>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </FiltersStyles>
  );
};
