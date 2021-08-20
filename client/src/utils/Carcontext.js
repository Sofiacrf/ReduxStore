import React from 'react';
import { Provider } from 'react-redux';

// Open /utils/CarContext.js and import { Provider } from react-redux and store from ./store.
import store from './store';

export default function CarProvider(props) {
  // Return the provider component provided by react-redux
  return <Provider store={store} {...props} />;
}