import React, { Fragment, useContext, useEffect } from 'react';
import Search from '../foods/Search';
import Foods from '../foods/Foods';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
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
