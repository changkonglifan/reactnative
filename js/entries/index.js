//入口
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './../store/store';

export default Index = () => {
    return (
      <Provider store={store}>
      </Provider>
    )
}