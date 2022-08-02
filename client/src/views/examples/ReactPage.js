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
  Col, Collapse, Card, CardBody
} from "reactstrap";
import { ListGroup, ListGroupItem, Fade } from 'reactstrap';

import SignUp from "../index-sections/SignUp";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";



function CourseContent(props) {
  const [fadeIn, setfadeIn] = React.useState(false);
  const diplay = () => {
    setfadeIn(!fadeIn)
  }
  return (<div>

    <Button className="btn-round" color="info" id="button-collapse" outline type="button" onClick={() => diplay()}>
      +
    </Button>        <Collapse isOpen={fadeIn}>
      <Card>
        <CardBody>

          {props.contentlign1}<br />
          {props.contentlign2}<br />
          {props.contentlign3}<br />
        </CardBody>
      </Card>
    </Collapse>
    {/* <Button className="btn-round" color="info" outline type="button" onClick={() => diplay()}>
      +
    </Button>
    <Fade in={fadeIn} tag="h5" className="mt-3">
      {props.contentlign1}<br />
      {props.contentlign2}<br />
      {props.contentlign3}<br />

    </Fade> */}
  </div>
  );
}

function ReactPage() {


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
                    The objectives of this program                  </h3>
                  <p>

                    <ul>
                      <li>Find out how React fits into the new generation of web development.</li>
                      <li>Learn how to build and launch web applications using React JS and Redux.</li>
                      <li>
                        Master the fundamental concepts of structuring Redux in your applications.</li>
                      <li>
                        Work with React Hooks.</li>
                      <li>
                        Learn how to create interactive and rich user interfaces using both Functional Components and Class Components with React Hooks. Create a practical application: a game for children with React.</li>
                      <li>Learn how to build apps from scratch.</li>
                    </ul>


                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div>

        </div>
        <div className="section section-tabs">
          <Container>

            <Row>
              <Col className="ml-auto mr-auto" md="4" xl="8">
                <p className="category">Rich content
                </p>
                <ListGroup>

                  <ListGroupItem>1- General overview <CourseContent contentlign1={"-Define what a web application is ."} contentlign2={"-Understand the difference between web application"} contentlign3={""} /></ListGroupItem>
                  <ListGroupItem>2- Discover ES6 <CourseContent contentlign1={"-Define ES6 ."} contentlign2={"-List the different new features of ES6."} contentlign3={"-Explore ES6."} /></ListGroupItem>
                  <ListGroupItem>3- React.js <CourseContent contentlign1={"-Discover React."} contentlign2={"-Understand why we use React."} contentlign3={"-Learn about React's features."} /></ListGroupItem>
                  <ListGroupItem>4- Virtual DOM <CourseContent contentlign1={"-Discover the virtual DOM?"} contentlign2={"-Understand how to use Virtual DOM with React."} contentlign3={""} /></ListGroupItem>
                  <ListGroupItem>5- Discover JSX <CourseContent contentlign1={"-Discover JSX Understand and write with JSX."} contentlign2={"-Learn to work with JSX."} contentlign3={""} /></ListGroupItem>
                  <ListGroupItem>6- React Components <CourseContent contentlign1={"-Understand the React component."} contentlign2={"-Learn how to create and decompose React components."} contentlign3={"-Optimize your code with React."} /></ListGroupItem>
                  <ListGroupItem>7- React Props <CourseContent contentlign1={"-Learn to work with React Props."} contentlign2={"-Differentiate between the types of “Props”"} contentlign3={"-Learn the best practices for using “Props”"} /></ListGroupItem>
                  <ListGroupItem>8- React State <CourseContent contentlign1={"-Learn what React State is and how to use it."} contentlign2={"-Develop a component with Hooks."} contentlign3={""} /></ListGroupItem>
                  <ListGroupItem>9- React Hooks<CourseContent contentlign1={"-Handling React Hooks."} contentlign2={"-Avoid common mistakes by using Hooks."} contentlign3={"-Build your own “Hook”."} /></ListGroupItem>
                  <ListGroupItem>10- React Router <CourseContent contentlign1={"-Understand how React Router works."} contentlign2={"-Produce a multi-router page."} contentlign3={""} /></ListGroupItem>
                  <ListGroupItem>11- Redux <CourseContent contentlign1={"-Define what Redux is."} contentlign2={"-Manage the global state with Redux."} contentlign3={"-Manage bugs with Redux."} /></ListGroupItem>
                  <ListGroupItem>12- API <CourseContent contentlign1={"-Understand how to use the API."} contentlign2={"-Develop a web service."} contentlign3={"-Work with an HTTP request."} /></ListGroupItem>
                </ListGroup>
              </Col>

            </Row>

          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <SignUp />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ReactPage;
