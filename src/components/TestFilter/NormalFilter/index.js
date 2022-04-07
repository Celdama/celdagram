import React from 'react';

export const NormalFilter = ({ filterClass, setFilterClass }) => {
  return (
    <div>
      <div
        className={`filter-item ${
          filterClass === 'filter-normal' ? 'filter-item--selected' : ''
        }`}
      >
        <div className='filter-item__img'>
          <img
            src='https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='normal'
          />
        </div>
        <div className='filter-item__name'>
          <p>
            <strong>normal</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
