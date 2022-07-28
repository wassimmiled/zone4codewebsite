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

// core components

function Events() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <p className="category">UPCOMING EVENTS IN

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
                       Intro to Customer Journey Mapping | FREE Online Livestream | July 28 </NavLink>
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
                      Consumer empathy. It’s the key to successful product strategy, design, and marketing. To successfully create an offering that dramatically shifts behavior, generates habitual engagement, and promotes a profitable cycle, we must first understand the consumer journey.

In this free, two-hour livestream, you’ll learn about the basics of customer journey mapping, and how it fits into the broader field of UX Design. Then, you’ll get a chance to apply the fundamentals of customer journey mapping to a real-world scenario. All in real time, taught by an industry professional.

Come learn the basics and gain the skills you need to create your first customer journey map!                      </p>
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
                       Intro to Customer Journey Mapping | FREE Online Livestream | July 28 </NavLink>
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
                      Consumer empathy. It’s the key to successful product strategy, design, and marketing. To successfully create an offering that dramatically shifts behavior, generates habitual engagement, and promotes a profitable cycle, we must first understand the consumer journey.

In this free, two-hour livestream, you’ll learn about the basics of customer journey mapping, and how it fits into the broader field of UX Design. Then, you’ll get a chance to apply the fundamentals of customer journey mapping to a real-world scenario. All in real time, taught by an industry professional.

Come learn the basics and gain the skills you need to create your first customer journey map!                      </p>
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
                       Intro to Customer Journey Mapping | FREE Online Livestream | July 28 </NavLink>
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
                      Consumer empathy. It’s the key to successful product strategy, design, and marketing. To successfully create an offering that dramatically shifts behavior, generates habitual engagement, and promotes a profitable cycle, we must first understand the consumer journey.

In this free, two-hour livestream, you’ll learn about the basics of customer journey mapping, and how it fits into the broader field of UX Design. Then, you’ll get a chance to apply the fundamentals of customer journey mapping to a real-world scenario. All in real time, taught by an industry professional.

Come learn the basics and gain the skills you need to create your first customer journey map!                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>

      <Button color="info" type="button">
                View all events
              </Button>
        </Container>
        
      </div>
    </>
  );
}

export default Events;
