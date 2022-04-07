import React, { useEffect } from 'react';

export const CustomFilter = ({
  filterClass,
  setFilterClass,
  setOpenCustom,
}) => {
  const handleCustomFilter = () => {
    setOpenCustom(true);
    setFilterClass('filter-custom');
  };

  useEffect(() => {
    if (filterClass !== 'filter-custom') {
      setOpenCustom(false);
    }
  }, [filterClass, setOpenCustom]);

  return (
    <div>
      <div
        className={`filter-item ${
          filterClass === 'filter-custom' ? 'filter-item--selected' : ''
        }`}
        onClick={() => handleCustomFilter()}
      >
        <div className='filter-item__img'>
          <img
            src='https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='custom'
          />
        </div>
        <div className='filter-item__name'>
          <p>
            <strong>Custom</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
