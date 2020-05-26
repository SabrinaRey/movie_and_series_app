import React from "react";
import GlobalStyle from "./components/styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TypeIndicatorComponent from "./components/TypeIndicatorComponent";
import IdComponent from "./components/IdComponent";
import AllCardsSection from "./components/AllCardsSection";


const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <NavBar />

        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:type" component={TypeIndicatorComponent}></Route>
        <Switch>
          <Route
            exact
            path="/:type/:category/:section"
            component={AllCardsSection}
          ></Route>
          <Route exact path="/:type/:id" component={IdComponent}></Route>

          {/* <Route path="/multi/:search" component ={CardInfo}></Route> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
