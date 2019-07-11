/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  CardBody, CardTitle, Row, Col, CardSubtitle, CardText, Button,
} from 'reactstrap';
import Card from '../Card/Card';
import './modules.scss';

const Module = () => (
  <div className="m-container cd-view view">
    <div className="m-intro">
      <h3>Modules</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <Row>
      <Col sm={{ size: 'auto' }}>
        <Card>
          <CardBody className="m-c-title">
            <CardTitle>Module 1</CardTitle>
            <CardSubtitle>Description</CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
            <CardSubtitle>Introduction</CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={{ size: 'auto' }}>
        <Card>
          <CardBody className="m-c-title">
            <CardTitle>Module 2</CardTitle>
            <CardSubtitle>Description</CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
            <CardSubtitle>Introduction</CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={{ size: 'auto' }}>
        <Card>
          <CardBody className="m-c-title">
            <CardTitle>Module 3</CardTitle>
            <CardSubtitle>Description</CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
            <CardSubtitle>Introduction</CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <div className="take-course">
      <Button>
        Take Course
      </Button>
    </div>
  </div>
);


export default Module;
