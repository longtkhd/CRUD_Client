/**
 *
 * PrivateRoute
 *
 */
import React, { useState, useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute(props) {
  const { component: InnerComponent, layout: Layout, ...rest } = props;
  const { location } = props;
 
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('isAuthenticated') === 'true') {
          
          return (
            <>
              <Layout>
                <InnerComponent {...props} />
              </Layout>
            </>
          );
        } else {
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          );
        }
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};

export default withRouter(PrivateRoute);
