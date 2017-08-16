//入口
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './../store/store';

import IndexPage from "./../views/Index"

export default Index = () => {
    return (
      <Provider store={store}>
        <IndexPage />
      </Provider>
    )
}