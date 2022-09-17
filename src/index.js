import React from 'react';
import { BrowserRouter } from 'react-router-dom/dist';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/ConfigureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    ,
  </Provider>,
);
