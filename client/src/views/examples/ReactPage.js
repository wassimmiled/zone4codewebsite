import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import SignUp from "../index-sections/SignUp";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ReactPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />

        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Become a Front-end ReactJS Developer
                </h2>

                <h5 className="description">
                  Learn the latest technologies to become a great Front-end developer and build rich, interactive web applications and user interfaces with JavaScript, ES6, and React. Manage "states" with Redux and manipulate external APIs.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/MarketingSolutions1.jpeg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      Who can join us?
                      <ul>
                        <li>
                          People aged 18 or older
                        </li>
                        <li>
                          People who are passionate about web development
                        </li>
                        <li>
                          People who want to learn more about web development.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/MarketingSolutions2.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/TransformYourTalent3.jpg") + ")",
                    }}
                  ></div>
                  <h3>
                    Rich content                 </h3>
                  <p>
                    <ul>
                      <li>
                        1-General overview:
                        -Define what a web application is.

                        -Understand the difference between web application parts.
                      </li>
                      <li>
                        2-Discover ES6
                        -Define ES6.

                        -List the different new features of ES6.

                        -Explore ES6.
                      </li>
                      <li>
                        3-React.js
                        -Discover React.

                        -Understand why we use React.

                        -Learn about React's features.
                      </li>
                      <li>
                        4-Virtual DOM
                        -Discover the virtual DOM?

                        -Understand how to use Virtual DOM with React.
                      </li>
                      <li>
                        5-Discover JSX
                        Understand and write with JSX.

                        Learn to work with JSX.
                      </li>
                      <li>
                        6-React Components
                        Understand the React component.

                        Learn how to create and decompose React components.

                        Optimize your code with React.
                      </li>
                      <li>
                        7-React Props
                        Learn to work with React Props.

                        Differentiate between the types of “Props”

                        Learn the best practices for using “Props”
                      </li>
                      <li>
                        8-React State
                        Learn what React State is and how to use it.

                        Develop a component with Hooks.
                      </li>
                      <li>
                        9-React Hooks
                        Handling React Hooks.

                        Avoid common mistakes by using Hooks.

                        Build your own “Hook”.
                      </li>
                      <li>
                        10-React Router
                        Understand how React Router works.

                        Produce a multi-router page.
                      </li>
                      <li>
                        10-Redux
                        Define what Redux is.

                        Manage the global state with Redux.

                        Manage bugs with Redux.
                      </li>
                      <li>
                        10-API
                        Understand how to use the API.

                        Develop a web service.

                        Work with an HTTP request.
                      </li>
                    </ul>

                  </p>


                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}
                    ></img>
                    <h4 className="title">Romina Hadid</h4>
                    <p className="category text-info">MarketingSolutions2</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Ryan Tompson</h4>
                    <p className="category text-info">Digital Marketing Expert

                    </p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Digital Marketing Expert</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div> */}
        <div className="section section-contact-us text-center">
          <SignUp />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ReactPage;
