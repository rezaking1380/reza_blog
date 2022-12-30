import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchBlogs, fetchComments, userPost } from './redux/api';
import { BrowserRouter } from 'react-router-dom';

if(store.getState().blogs.allblog.length === 0)
  store.dispatch(fetchBlogs())

if(store.getState().comments.allcomment.length === 0)
  store.dispatch(fetchComments())

if(store.getState().blogs.users.length === 0)
  store.dispatch(userPost())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
