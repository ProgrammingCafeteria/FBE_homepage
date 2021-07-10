

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/* 共通コンポーネント */
import Header from './components/Header';
import Footer from './components/Footer';
/* ページコンポーネント */
import TopPage from "./pages/TopPage" ;
import _TemplatePage from "./pages/_TemplatePage" ;
import UnknownPage from "./pages/UnknownPage" ;


/* 設定 */


/* 描画 */
ReactDOM.render(
  <>
    <Header />
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/top" component={TopPage} />
          <Route exact path="/template" component={_TemplatePage} />
          <Route exact path="/:path" component={UnknownPage} />
        </Switch>
      </BrowserRouter>
    </main>
    <Footer />
  </>,
  document.getElementById("root")
);









reportWebVitals();
