

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/* 共通コンポーネント */
import "./css/style.css"
import Header from './components/Header';
import Footer from './components/Footer';

/* ページコンポーネント */
import TopPage from "./pages/TopPage" ;
import AboutPage from "./pages/AboutPage" ;
import MorePage from "./pages/MorePage" ;
import TutorialPage01 from "./pages/TutorialPage" ;
import UnknownPage from "./pages/UnknownPage" ;
import UncreatedPage from "./pages/UncreatedPage" ;
import Prac01 from "./pages/_Prac01" ;



/* 設定 */


/* 描画 */
ReactDOM.render(
  <>
    <Header />
    <BrowserRouter>
      <Switch>
        
        {/* 各ページ */}
        <Route exact path="/" component={TopPage} />
        <Route exact path="/top" component={TopPage} />
        <Route exact path="/download" component={UncreatedPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/more" component={MorePage} />
        <Route exact path="/conntact" component={UncreatedPage} />
        <Route exact path="/credit" component={UncreatedPage} />

        <Route path="/tutorial/:tid" component={TutorialPage01} />

        {/* 開発用 */}
        <Route exact path="/prac01" component={Prac01} />


        {/* 汎用 */}
        <Route component={UnknownPage} status={404} />

      </Switch>
    </BrowserRouter>
    <Footer />
  </>,
  document.getElementById("root")
);









reportWebVitals();
