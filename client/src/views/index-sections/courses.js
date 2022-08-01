import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col, Button
} from "reactstrap";
import { useHistory } from "react-router-dom";

// core components

function Courses() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");

  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  }

  return (
    <>
      <div className="section section-tabs">
        <Container>
          <p className="category">Start Learning
          </p>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>

                    <NavItem>
                      <NavLink
                        className={"active"}
                        onClick={() => routeChange('/react-course')}
                        >
                        Front-end ReactJS Developer </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Learn the latest technologies to become a great Front-end developer and build rich, interactive web applications and user interfaces with JavaScript, ES6, and React. Manage "states" with Redux and manipulate external APIs.
                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              {/* <p className="category">Tabs with Background on Card</p> */}
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>

                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >


                        Become a FullStack Developer
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Change your professional path and start a career as a junior FullStack JS developer.

                        The program allows you to undergo intensive training that will allow you to launch a career as a FullStack JS developer and master the technologies demanded by employers.                                   </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              {/* <p className="category">Tabs with Background on Card</p> */}
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>

                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >


                        Become a Back-end Web Developer with NodeJS
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Master the technologies of Back-end development: JavaScript, Node.js, Express, MongoDB, mongoose ... and use it to create the Back-end of your web application independently from the Front-end part. You will also manipulate the NoSQL database and model the data with mongoose.
                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>

                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >
                        Introduction to Web Development
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Learn the latest technologies to become a web developer and create websites with HTML, CSS. You will also learn the basics of JavaScript to make your pages interactive                     </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              {/* <p className="category">Tabs with Background on Card</p> */}
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>

                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >


                        Front-End Web Development
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Use HTML5, CSS3, JavaScript, jQuery, GitHub and Sublime Text to program and lay out a fully responsive, interactive website.                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              {/* <p className="category">Tabs with Background on Card</p> */}
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>

                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >
                        Product Management
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Guide a product through its lifecycle via lean methodologies that yield viable, market-ready products that anticipate user needs.                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Button color="info" type="button" 
           onClick={() => routeChange('/landing-page')}
          >
            Browse courses
          </Button>
        </Container>

      </div>
    </>
  );
}

export default Courses;
