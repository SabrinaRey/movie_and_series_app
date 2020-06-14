import React from "react";
// me gusta mucho este archivo de estilos globales, organiza bien el codigo y lo usaste muy bien. 
import GlobalStyle from "./components/styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import MediaCategories from "./components/MediaCategories";
import IdComponent from "./components/IdComponent";
import AllCardsSection from "./components/AllCardsSection";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route exact path="/multi/:search" component={SearchResults}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:type" component={MediaCategories}></Route>
          <Route
            exact
            path="/:type/:category/:section/:page/:pagenumber"
            component={AllCardsSection}
          ></Route>
          <Route
            exact
            path="/:type/:id/:attribute"
            component={IdComponent}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
