import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Navigate = ({ routes }) => {
  return (
    <Switch>
      {
        routes.map(item => (
          <Route key={new Date().getTime()} {...item} />
        ))
      }
    </Switch>
  );
};

export default Navigate;