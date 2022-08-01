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
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
        <p className="category">Mode of education
          </p>
          <Row>
            <Col className="ml-auto mr-auto" md="4" xl="4">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >
                        Pack
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
                        The idea is to give the student access to a set of well-selected training courses that allow him to focus on a specialty (backend, devops, etc.)
                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4" xl="4">
              {/* <p className="category">Tabs with Background on Card</p> */}
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >


                        Module
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
                        The idea is to give the student access to a set of well-selected trainings that allow him to gain skills of a particular language (max 3 trainings ).                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4" xl="4">
              {/* <p className="category">Tabs with Background on Card</p> */}
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={"active"}
                      // href="#pablo"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setPills("1");
                      // }}
                      >
                        Track
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
                        The idea is to give the student access to a single training course .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
