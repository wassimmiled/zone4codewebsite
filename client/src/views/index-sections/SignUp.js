import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle, Col,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";

// core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [inputValueFirstname, setInputValueFirstname] = React.useState("");
  const [inputValueEmail, setInputValueEmail] = React.useState("");
  const [inputValueEmailContent, setInputValueEmailContent] = React.useState("");

  const onChangeHandlerFirstname = event => {
    setInputValueFirstname(event.target.value);
    console.log('setInputValueFirstname', inputValueFirstname)
  };
  const onChangeHandlerEmail = event => {
    setInputValueEmail(event.target.value);
    console.log('setInputValueEmail', inputValueEmail)
  };
  const onChangeHandlerEmailContent = event => {
    setInputValueEmailContent(event.target.value);
    console.log('setInputValueEmailContent', inputValueEmailContent)
  };
  const onSubmit = event => {
    event.preventDefault()
    console.log(inputValueFirstname, inputValueEmail, inputValueEmailContent)
    axios.post("http://localhost:3001/api/emailing/sendmail", {
      ValueFirstname: inputValueFirstname,
      ValueEmail: inputValueEmail,
      ValueEmailContent: inputValueEmailContent
    });
  };
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundColor:
            "#ffff",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >



        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">CONTACT US
            </h2>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onChange={onChangeHandlerFirstname}

                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onChange={onChangeHandlerEmail}

                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    onChange={onChangeHandlerEmailContent}

                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round" to="/nucleo-icons"
                    color="info"
                    href="#pablo"
                    onClick={onSubmit}

                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>





      </div>
    </>
  );
}

export default SignUp;
