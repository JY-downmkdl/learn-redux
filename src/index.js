import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
// 다른 툴킷 새 버전이 있어서 createStore만 두면 가로줄이 좌악 그임 ;
import { legacy_createStore as  createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { Provider } from 'react-redux';

//redux-devtools 를 프젝에 적용하기
const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
