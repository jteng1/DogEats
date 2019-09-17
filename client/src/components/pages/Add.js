import React, { Fragment, useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import FoodContext from '../../context/food/foodContext';

const Add = () => {
  const alertContext = useContext(AlertContext);
  const foodContext = useContext(FoodContext);

  const { setAlert } = alertContext;
  const { addFood } = foodContext;

  const [food, setFood] = useState({
    foodName: '',
    edible: null,
    edibleDetails: '',
    foodDetails: '',
    imgUrl: ''
  });

  const { foodName, edible, edibleDetails, foodDetails, imgUrl } = food;

  const onSubmit = e => {
    e.preventDefault();
    if (foodName === '' || foodDetails === '' || edible === null) {
      setAlert('Please fill in all fields', 'danger');
    } else {
      setAlert(`${food.foodName} was added successfully.`, 'success');
      addFood(food);
      setFood({
        foodName: '',
        edible: 0,
        edibleDetails: '',
        foodDetails: '',
        imgUrl: ''
      });
    }
  };

  const onChange = e => setFood({ ...food, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h2 className='text-primary'>Add a Food</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='foodName'>Food Name</label>
          <input
            type='text'
            placeholder='Food Name'
            name='foodName'
            value={foodName}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label>
            <input
              type='radio'
              name='edible'
              value='0'
              checked={edible === '0'}
              onChange={onChange}
            />
            Not Edible
          </label>
          <input
            type='radio'
            name='edible'
            value='1'
            checked={edible === '1'}
            onChange={onChange}
          />
          Edible
          <input
            type='radio'
            name='edible'
            value='2'
            checked={edible === '2'}
            onChange={onChange}
          />
          Okay in moderation
        </div>
        <div className='form-group'>
          <label htmlFor='edibleDetails'>Edible Details</label>
          <input
            type='text'
            placeholder='Is this food edible for dogs?'
            name='edibleDetails'
            value={edibleDetails}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='foodDetails'>Food Details</label>
          <input
            type='text'
            placeholder='Information about the food...'
            name='foodDetails'
            value={foodDetails}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='imgUrl'>Add an image link</label>
          <input
            type='text'
            placeholder='Image URL'
            name='imgUrl'
            value={imgUrl}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Add Food'
          className='btn btn-primary btn-block'
        />
      </form>
    </Fragment>
  );
};

export default Add;
