import React, { useContext, useRef, useEffect } from 'react';
import FoodContext from '../../context/food/foodContext';

const Search = () => {
  const foodContext = useContext(FoodContext);
  const text = useRef('');

  const { filterFoods, clearFilter, filtered, numberOfItems } = foodContext;

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
    }
  };

  const handleClick = e => {
    e.preventDefault();
    clearFilter();
  };

  return (
    <form>
      <h1 className='text-primary'>Number of Items: {numberOfItems}</h1>
      <input
        ref={text}
        type='text'
        placeholder='Search foods...'
        onChange={onChange}
      />
      <button className='btn btn-light btn-block' onClick={handleClick}>
        Clear
      </button>
    </form>
  );
};

export default Search;
