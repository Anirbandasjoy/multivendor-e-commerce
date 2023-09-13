import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Toaster } from 'react-hot-toast';
const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading...">
        <App />
        <Toaster
          toastOptions={{
            position: "bottom",
            style: {
              background: "#283046",
              color: 'white'
            }
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
