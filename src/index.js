import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.*b+';
import store from './store/store';
import { Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
