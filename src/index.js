

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
import UnknownPage from "./pages/UnknownPage" ;
import UncreatedPage from "./pages/UncreatedPage" ;
import Prac01 from "./pages/_Prac01" ;
import TutorialTemplate from "./components/TutorialTemplate" ;


/* 設定 */
const Test = (props)=>{
  const list = [
    {"pageId":"1","title":"TEST 1","jsx":<h1>TEST 1</h1>},
    {"pageId":"2","title":"TEST 2","jsx":<h1>TEST 2</h1>},
    {"pageId":"3","title":"TEST 3","jsx":<h1>TEST 3</h1>}
  ] ;
  return (
    <TutorialTemplate className="test" match={props.match} title="テスト用" pageList={list} url="/test/"/>
  ) ;
};


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

        <Route path="/tutorial/:pageId" component={TutorialPage02} />
        <Route path="/flowchart_tutorial/:pageId" component={TutorialPage01} />
        <Route path="/fbe_tutorial/:pageId" component={TutorialPage02} />

        {/* 開発用 */}
        <Route exact path="/prac01" component={Prac01} />
        <Route exact path="/test/:pageId" component={Test} />


        {/* 汎用 */}
        <Route component={UnknownPage} status={404} />

      </Switch>
    </BrowserRouter>
    <Footer />
  </>,
  document.getElementById("root")
);








reportWebVitals();
