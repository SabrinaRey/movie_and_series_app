import React from "react";
import GlobalStyle from "./components/styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import MediaCategories from "./components/MediaCategories";
import IdComponent from "./components/IdComponent";
import AllCardsSection from "./components/AllCardsSection";
import CastComponent from "./components/CastComponent";
import Videos from "./components/Videos";
import Similar from "./components/Similar";
import Episodes from "./components/Episodes";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:type" component={MediaCategories}></Route>

          <Route
            exact
            path="/:type/:category/:section/:page"
            component={AllCardsSection}
          ></Route>
          <Route exact path="/:type/:id/" component={IdComponent}></Route>
          <Route exact path="/:type/:id/cast" component={CastComponent} />
          <Route exact path="/:type/:id/videos" component={Videos} />
          <Route exact path="/:type/:id/similar" component={Similar} />
          <Route exact path="/:type/:id/seasons" component={Episodes} />
          <Route path="/:multi/:search" component={SearchResults}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
