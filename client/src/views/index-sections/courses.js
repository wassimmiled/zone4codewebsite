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
  Col,Button
} from "reactstrap";
import { useHistory } from "react-router-dom";

// core components

function Courses() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
   
  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/landing-page`; 
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
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >
                        Data Analytics Immersive </NavLink>
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
                        Discover how to mine data for insights to help inform strategic business decisions. Pursue an in-demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more.
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


                        Software Engineering Immersive
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
                        Break into a high-growth, high-pay career. Dive into computer science, get fluent in key frameworks and stacks, build rich apps, and more.                      </p>
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


                        UX Design Immersive                      </NavLink>
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
                        Launch a UX career with the research and design skills today's top companies require. Build a professional-grade portfolio that gets noticed.                      </p>
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
                        Data Science Immersive
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
                      Master the basics of machine learning to forecast what's next: predict patterns from large datasets using Python.                      </p>
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
      <Button color="info" type="button"                 onClick={routeChange}
>
                Browse courses
              </Button>
        </Container>
        
      </div>
    </>
  );
}

export default Courses;
