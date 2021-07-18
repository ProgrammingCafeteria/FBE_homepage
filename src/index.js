

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/* 共通コンポーネント */
import "./css/style.css"
import Header from './components/Header';
import Footer from './components/Footer';
import TutorialPageTemplate from "./components/TutorialPageTemplate" ;
/* ページコンポーネント */
import TopPage from "./pages/TopPage" ;
import AboutPage from "./pages/AboutPage" ;
import MorePage from "./pages/MorePage" ;
import TutorialPage01 from "./pages/TutorialPage01" ;
import UnknownPage from "./pages/UnknownPage" ;
import UncreatedPage from "./pages/UncreatedPage" ;


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

        <Route exact path="/tutorial" component={TutorialPage01} />
        <Route exact path="/tutorial_01" component={TutorialPage01} />
        <Route exact path="/tutorial_temp" component={TutorialPageTemplate} />

        {/* 開発用 */}

        {/* 汎用 */}
        <Route exact path="/:path" component={UnknownPage} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>,
  document.getElementById("root")
);









reportWebVitals();
