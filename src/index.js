import React from 'react';
import {createRoot} from 'react-dom/client';
import SwithRoutes from './components/SwithRoutes';
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <SwithRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);