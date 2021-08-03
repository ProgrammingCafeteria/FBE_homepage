

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./css/baseStyle.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* 共通コンポーネント */
import Header from './components/Header';
import Footer from './components/Footer';

/* ページコンポーネント */
import TopPage from "./pages/TopPage" ;
import AboutPage from "./pages/AboutPage" ;
import MorePage from "./pages/MorePage" ;
import TutorialPage01 from "./pages/TutorialPage01" ;
import TutorialPage02 from "./pages/TutorialPage02" ;
import TutorialPage03 from "./pages/TutorialPage03" ;
import DownloadPage from "./pages/DownloadPage" ;
import ContactPage from "./pages/ContactPage" ;
import CreditPage from "./pages/CreditPage" ;
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
        <Route exact path="/download" component={DownloadPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/more" component={MorePage} />
        <Route exact path="/conntact" component={ContactPage} />
        <Route exact path="/credit" component={CreditPage} />

        <Route path="/tutorial/:pageId" component={TutorialPage02} />
        <Route path="/flowchart_tutorial/:pageId" component={TutorialPage01} />
        <Route path="/fbe_tutorial/:pageId" component={TutorialPage02} />
        <Route path="/fbe_ref/:pageId" component={TutorialPage03} />

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
