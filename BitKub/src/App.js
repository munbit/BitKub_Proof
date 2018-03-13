import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StackNavigator } from 'react-navigation';
import thunk from 'redux-thunk';
import reducer from './redux';
import Home from './screens/home';
import Add from './screens/add';

// Type navigation object that's being passed to every screen by react-navigation
export type Navigation = {
  navigate: (screen: string, params?: Object) => void,
  goBack: () => void,
  state: {
    routeName: string,
    params?: Object,
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// Configure navigation
const Screens = StackNavigator({
  home: { screen: Home }, // list with the chart
  add: { screen: Add },   // add new coin screen
}, {
    mode: 'modal',      // Add screen slides up from the bottom
    headerMode: 'none', // disable headers
  });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}