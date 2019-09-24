import React, { Fragment, useContext, useEffect } from 'react';
import FoodItem from './FoodItem';
import FoodContext from '../../context/food/foodContext';
import Spinner from '../layout/Spinner';

const Foods = () => {
  const foodContext = useContext(FoodContext);

  const { foods, filtered, loading, clearFilter, clearCurrent } = foodContext;

  useEffect(() => {
    clearCurrent();
    clearFilter();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={userStyle}>
      {!loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map(food => <FoodItem key={food._id} food={food} />)
            : foods.map(food => <FoodItem key={food._id} food={food} />)}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const userStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
  // gridTemplateColumns: 'repeat(3, 1fr)',
  // gridGap: '1rem'
};

export default Foods;
