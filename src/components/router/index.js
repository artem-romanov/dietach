import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignUp from './SignUp';

const Router = ({
  location,
}) => {
  return (
    <div>
      <Route
        location={location}
        component={SignUp}
        path="/signup"
        exact
      />
    </div>
  );
};

Router.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Router;
