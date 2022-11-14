import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './components/App';
import store from './store/store'
import { Provider } from 'react-redux'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
);