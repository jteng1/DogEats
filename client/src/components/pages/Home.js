import React, { Fragment, useContext, useEffect } from 'react';
import Search from '../foods/Search';
import Foods from '../foods/Foods';
import AuthContext from '../../context/auth/authContext';
import FoodContext from '../../context/food/foodContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const foodContext = useContext(FoodContext);

  const { foods, fetchFoods, setLoading } = foodContext;

  useEffect(() => {
    authContext.loadUser();

    if (!foods.length) {
      setLoading();
      fetchFoods();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Search />
      <Foods />
    </Fragment>
  );
};

export default Home;
