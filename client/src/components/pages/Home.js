import React, { Fragment } from 'react';
import Search from '../foods/Search';
import Foods from '../foods/Foods';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Foods />
    </Fragment>
  );
};

export default Home;
