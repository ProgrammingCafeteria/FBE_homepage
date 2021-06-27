

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* 共通コンポーネント */
import Header from './Header';
import Footer from './Footer';
/* ページコンポーネント */
import Top from "./Top" ;
import PageTemplate from "./PageTemplate" ;
import Unknown from "./Unknown" ;


/* 設定 */


/* 描画 */
ReactDOM.render(
  <>
    <Header />
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/top" component={Top} />
          <Route exact path="/template" component={PageTemplate} />
          <Route exact path="/:id" component={Unknown} />
        </Switch>
      </BrowserRouter>
    </main>
    <Footer />
  </>,
  document.getElementById("root")
);









reportWebVitals();
