import React, { useContext, useRef, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';
import FoodContext from '../../context/food/foodContext';

const Search = () => {
  const authContext = useContext(AuthContext);
  const foodContext = useContext(FoodContext);
  const text = useRef('');

  const { admin } = authContext;

  const {
    filterFoods,
    clearFilter,
    clearCurrent,
    filtered,
    numberOfItems
  } = foodContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterFoods(e.target.value);
    } else {
      clearFilter();
      clearCurrent();
    }
  };

  const handleClick = e => {
    e.preventDefault();
    clearFilter();
    clearCurrent();
  };

  return (
    <div>
      {!admin ? (
        <h2 className='large text-primary text-center'>Can Dogs Eat</h2>
      ) : (
        <h3>Number of Items: {numberOfItems}</h3>
      )}
      <input
        ref={text}
        type='text'
        placeholder='Search food...'
        onChange={onChange}
        autoFocus
      />
      <button className='btn btn-primary btn-block' onClick={handleClick}>
        Clear
      </button>
    </div>
  );
};

export default Search;
