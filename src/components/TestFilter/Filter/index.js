import React, { useEffect } from 'react';
import { FiltersStyles } from './filter.style';
import { NormalFilter } from '../NormalFilter';

import '../instagram.min.css';

export const Filter = ({ filterClass, setFilterClass, imgRef }) => {
  useEffect(() => {
    const divImg = imgRef.current;
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
      name: 'Amaro',
      class: 'filter-amaro',
    },
    {
      name: 'Ashby',
      class: 'filter-ashby',
    },
    // {
    //   name: 'Brannan',
    //   class: 'filter-brannan',
    // },
    // {
    //   name: 'Brooklyn',
    //   class: 'filter-brooklyn',
    // },
    // {
    //   name: 'Charmes',
    //   class: 'filter-charmes',
    // },
    // {
    //   name: 'Clarendon',
    //   class: 'filter-clarendon',
    // },
    // {
    //   name: 'Crema',
    //   class: 'filter-crema',
    // },
    // {
    //   name: 'Dogpatch',
    //   class: 'filter-dogpatch',
    // },
    // {
    //   name: 'Earlybird',
    //   class: 'filter-earlybird',
    // },
    // {
    //   name: 'Gingham',
    //   class: 'filter-gingham',
    // },
    // {
    //   name: 'Ginza',
    //   class: 'filter-ginza',
    // },
    // {
    //   name: 'Hafe',
    //   class: 'filter-hafe',
    // },
    // {
    //   name: 'Helena',
    //   class: 'filter-helena',
    // },
    // {
    //   name: 'Hudson',
    //   class: 'filter-Inkwell',
    // },
    // {
    //   name: 'Inkwell',
    //   class: 'filter-inkwell',
    // },
    // {
    //   name: 'Kelvin',
    //   class: 'filter-kelvin',
    // },
    // {
    //   name: 'Lark',
    //   class: 'filter-lark',
    // },
    // {
    //   name: 'Lo-fi',
    //   class: 'filter-lofi',
    // },
    // {
    //   name: 'Ludwing',
    //   class: 'filter-ludwing',
    // },
    // {
    //   name: 'Maven',
    //   class: 'filter-maven',
    // },
    // {
    //   name: 'Mayfair',
    //   class: 'filter-mayfair',
    // },
    // {
    //   name: 'Moon',
    //   class: 'filter-moon',
    // },
    // {
    //   name: 'Nashville',
    //   class: 'filter-nashvile',
    // },
    // {
    //   name: 'Perpetua',
    //   class: 'filter-perpetua',
    // },
    // {
    //   name: 'Poprocket',
    //   class: 'filter-poprocket',
    // },
    // {
    //   name: 'Reyes',
    //   class: 'filter-reyes',
    // },
    // {
    //   name: 'Rise',
    //   class: 'filter-rise',
    // },
    // {
    //   name: 'Sierra',
    //   class: 'filter-sierra',
    // },
    // {
    //   name: 'Skyline',
    //   class: 'filter-skyline',
    // },
    // {
    //   name: 'Slumber',
    //   class: 'filter-slumber',
    // },
    // {
    //   name: 'Stinson',
    //   class: 'filter-stinson',
    // },
    // {
    //   name: 'Sutro',
    //   class: 'filter-sutro',
    // },
    // {
    //   name: 'Toaster',
    //   class: 'filter-toaster',
    // },
    // {
    //   name: 'Valencia',
    //   class: 'filter-valencia',
    // },
    // {
    //   name: 'Vesper',
    //   class: 'filter-vesper',
    // },
    // {
    //   name: 'Walden',
    //   class: 'filter-walden',
    // },
    // {
    //   name: 'Willow',
    //   class: 'filter-willow',
    // },
    // {
    //   name: 'X-Pro II',
    //   class: 'filter-xpro-ii',
    // },
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
              onClick={() => setFilterClass(filter.class)}
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
