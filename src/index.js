import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './App';


const Component = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Component />, document.querySelector('.container'));
