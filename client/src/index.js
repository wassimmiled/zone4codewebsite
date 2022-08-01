/*

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import PackPage from "views/examples/PackPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ModulePage from "views/examples/ModulePage.js";
import TrackPage from "views/examples/TrackPage.js";
import TransformYourTalent from "views/examples/TransformYourTalent.js";
import MarketingSolutions from "views/examples/MarketingSolutions.js";
import TechSolutions from "views/examples/TechSolutions.js";
import HirePage from "views/examples/HirePage.js";
import ReactPage from "views/examples/ReactPage.js";
import NodePage from "views/examples/NodePage.js";
import FullStackPage from "views/examples/FullStackPage.js";




ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/pack"
          render={(props) => <PackPage {...props} />}
        />
        <Route
          path="/corporate-digital-training"
          render={(props) => <TransformYourTalent {...props} />}
        />
        <Route
          path="/hire-tech-talent"
          render={(props) => <HirePage {...props} />}
        />
        <Route
          path="/marketing"
          render={(props) => <MarketingSolutions {...props} />}
        />
        <Route
          path="/tech"
          render={(props) => <TechSolutions {...props} />}
        />
        <Route
          path="/track"
          render={(props) => <TrackPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <PackPage {...props} />}
        />
{/* Courses details */}

<Route
          path="/react-course"
          render={(props) => <ReactPage {...props} />}
        />
<Route
          path="/node-course"
          render={(props) => <NodePage {...props} />}
        />

<Route
          path="/full-stack-course"
          render={(props) => <FullStackPage {...props} />}
        />











        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
