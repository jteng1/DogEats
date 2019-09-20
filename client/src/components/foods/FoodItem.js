import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FoodContext from '../../context/food/foodContext';

const FoodItem = ({ food }) => {
  const foodContext = useContext(FoodContext);

  const { setCurrent } = foodContext;

  const { foodName, edible } = food;

  let bgStyle;

  const makeCurrent = () => {
    setCurrent(food);
  };

  switch (edible) {
    case 0:
      bgStyle = {
        backgroundColor: '#dc3545'
      };
      break;
    case 1:
      bgStyle = {
        backgroundColor: '#28a745'
      };
      break;
    case 2:
      bgStyle = {
        backgroundColor: '#ebeb34'
      };
      break;
    default:
      bgStyle = {
        backgroundColor: '#fff'
      };
  }
  return (
    <div style={bgStyle} className='card text-center'>
      <Link to='/current'>
        <h2 className='text-dark' onClick={makeCurrent}>
          {foodName}
        </h2>
      </Link>
    </div>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired
};

export default FoodItem;
