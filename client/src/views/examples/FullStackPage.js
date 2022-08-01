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

    <Button className="btn-round" id="button-collapse" color="info" outline type="button" onClick={() => diplay()}>
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

function FullStackPage() {


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
                <h2 className="title">Become a FullStack Developer

                </h2>

                <h5 className="description">
                  Change your professional path and start a career as a junior FullStack JS developer.

                  The program allows you to undergo intensive training that will allow you to launch a career as a FullStack JS developer and master the technologies demanded by employers.                </h5>
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
                      <li>Become a FullStack JS developer by acquiring the basic skills and knowledge necessary to form a solid foundation of the current demands of the web development market.</li>
                      <li>
                        Learn the MERN stack which includes HTML5, CSS3, JavaScript ES6, ReactJS, Redux, NodeJS, Express, MongoDB and several libraries such as Bootstrap, Axios and Mongoose.</li>
                      <li>
                        Familiarize yourself with the world of web development by familiarizing yourself with its tools, lexicon and associated workflow standards.</li>
                      <li>Making the student part of a community and thus giving him the opportunity to develop his soft skills in a learning atmosphere.</li>
                      <li>Build a GitHub portfolio, which demonstrates the skills of students for future recruiters..</li>
                      <li>
                        Build a fully functional web application using the MERN stack that will integrate all the knowledge and skills acquired during the training.</li>
                    </ul>


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

          <ListGroupItem>1- Web fundamentals <CourseContent
            contentlign1={"-Differentiate between basic concepts such as: Internet and Web and discover how the Web works."}
            contentlign2={"-Define the APIs and the “Protocol”."}
            contentlign3={"-Create your first web page with two different methods."}
            contentlign4={""}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>2- HTML <CourseContent
            contentlign1={"-Learn the basics of HTML and become capable of building website skeletons and essential structures"}
            contentlign2={""}
            contentlign3={""}
            contentlign4={""}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>3- CSS<CourseContent
            contentlign1={"-Create websites and recreate / clone preselected designs with CSS."}
            contentlign2={"-Create different layouts with CSS: manage positioning and use Flexbox, CSS Grid, Bootstrap."}
            contentlign3={""}
            contentlign4={""}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>4- JavaScript<CourseContent
            contentlign1={"-Learn the basics of JavaScript."}
            contentlign2={"-Discover the essential principles on which the rest of the training will be built on."}
            contentlign3={""}
            contentlign4={""}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>5- Document Object Model<CourseContent
            contentlign1={"-With the Dom, you can manipulate the HTML content and styles of your pages."}
            contentlign2={""}
            contentlign3={""}
            contentlign4={""}
            contentlign5={""}
            contentlign6={""} /></ListGroupItem>
          <ListGroupItem>6- Git and github<CourseContent
            contentlign1={"-Discover Git and Github."}
            contentlign2={"-Learn Github features and manipulate projects using it."}
            contentlign3={""}
            contentlign4={""}
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

export default FullStackPage;
