import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FoodContext from '../../context/food/foodContext';

const FoodItem = ({ food }) => {
  const foodContext = useContext(FoodContext);

  const { setCurrent } = foodContext;

  const { foodName, edible } = food;

  let edibleIcon;

  const makeCurrent = () => {
    setCurrent(food);
  };

  switch (edible) {
    case 0:
      edibleIcon = (
        <i
          style={{ color: '#cc2121' }}
          className='fas fa-skull-crossbones x-large'
        />
      );
      break;
    case 1:
      edibleIcon = (
        <i
          style={{ color: '#45e630' }}
          className='fas fa-check-circle x-large'
        />
      );
      break;
    case 2:
      edibleIcon = (
        <i
          style={{ color: '#e6cd12' }}
          className='fas fa-exclamation-triangle x-large'
        />
      );
      break;
    default:
      edibleIcon = <i className='fas fa-question' />;
  }

  return (
    <Link to='/current'>
      <div className='card text-center p-1 shadow' onClick={makeCurrent}>
        <h2 className='text-primary m'>{foodName}</h2>
        {edibleIcon}
      </div>
    </Link>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired
};

export default FoodItem;
