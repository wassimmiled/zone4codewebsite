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

    <Button className="btn-round" id="button-collapse"color="info" outline type="button" onClick={() => diplay()}>
      +
    </Button>        <Collapse isOpen={fadeIn}>
      <Card>
        <CardBody>

          {props.contentlign1}<br />
          {props.contentlign2}<br />
          {props.contentlign3}<br />
          {props.contentlign4}<br />
          {props.contentlign5}<br />
          {props.contentlign6}<br />
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

function NodePage() {


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
                <h2 className="title">Become a Back-end Web Developer with NodeJS
                </h2>

                <h5 className="description">
                Master the technologies of Back-end development: JavaScript, Node.js, Express, MongoDB, mongoose ... and use it to create the Back-end of your web application independently from the Front-end part. You will also manipulate the NoSQL database and model the data with mongoose.
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
                      <li>Master all modern Back-end technologies: Node, Express, MongoDB and Mongoose (MongoDB JS driver).</li>
                      <li>Build high quality applications with Node, Express and MongoDB.</li>
                      <li>Apply best practices to build fast, scalable, and secure applications.</li>
                      <li>Build a feature-rich RESTful API</li>
                      <li>Understand the NoSQL database.</li>
                      <li>Handling databases with an ODM (Mongoose).</li>
                      <li>Build the back-end of a web application.</li></ul>


                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div>

        </div>
        <p className="category">                    Rich content

        </p>
        <ListGroup>

          <ListGroupItem>1- Node.js :<CourseContent
            contentlign1={"-Learn about Node.js and its terms."}
            contentlign2={"-Understand how to configure the development environment."}
            contentlign3={"-Develop a first application."}
            contentlign4={"-Understand the Node.js Package Manager."}
            contentlign5={"-Understand the callback function."}
            contentlign6={"-Work with the file system."} /></ListGroupItem>
          <ListGroupItem>2- Express :<CourseContent
            contentlign1={"-Understand the Express framework."}
            contentlign2={"-Learn to configure the environment."}
            contentlign3={"-Create your first app."}
            contentlign4={"-Understand routing with Express."}
            contentlign5={"-Work with the template engine."}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>3- Mongo DB (CRUD)<CourseContent
            contentlign1={"-Understand the NoSQL database."}
            contentlign2={"-Handling Mongo DB."}
            contentlign3={"-Manipulate data with the NoSQL database."}
            contentlign4={""}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>4- Mongoose<CourseContent
            contentlign1={"-Understand the use of ODM."}
            contentlign2={"-Discover the use of the “schema”."}
            contentlign3={"-Implement basic operations on a database."}
            contentlign4={""}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>5- Rest API<CourseContent
            contentlign1={"-Understand what a Restful API is."}
            contentlign2={"-Learn web architecture (client / server)."}
            contentlign3={"-Work with HTTP methods."}
            contentlign4={"-Develop a Restful API."}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
        </ListGroup>
        <div className="section section-contact-us text-center">
          <SignUp />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default NodePage;
