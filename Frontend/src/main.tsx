import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import { store } from './store/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
  
  <Provider store={store}>
  <BrowserRouter><App /></BrowserRouter>
  </Provider>
  
   
   
   
  </React.StrictMode>,
)
