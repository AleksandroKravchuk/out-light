import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';
// import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
  //   <PersistGate loading={'Loading...'}>
  //     <BrowserRouter basename="/final-project">
  <App />
  //     </BrowserRouter>
  //   </PersistGate>
  // </Provider>
);
