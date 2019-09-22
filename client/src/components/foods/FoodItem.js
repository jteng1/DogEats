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
        <i style={{ color: 'red' }} className='fas fa-skull-crossbones' />
      );
      break;
    case 1:
      edibleIcon = <i style={{ color: 'green' }} className='fas fa-check' />;
      break;
    case 2:
      edibleIcon = (
        <i
          style={{ color: 'yellow' }}
          className='fas fa-exclamation-triangle'
        />
      );
      break;
    default:
      edibleIcon = <i className='fas fa-question' />;
  }
  return (
    <div style={{ backgroundColor: '#f4f4f4' }} className='card text-center'>
      <Link to='/current'>
        <h2 className='text-dark' onClick={makeCurrent}>
          {foodName} <span>{edibleIcon}</span>
        </h2>
      </Link>
    </div>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired
};

export default FoodItem;
