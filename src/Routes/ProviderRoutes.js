import React from 'react';
import { Route } from 'react-router-dom';
import ProviderLayout from '../Layout/ProviderLayout';

export default function ({component: Component, ...rest}) {
  return (
    <Route {...rest}>
      <ProviderLayout>
        <Component/>
      </ProviderLayout>
    </Route>
  )
}