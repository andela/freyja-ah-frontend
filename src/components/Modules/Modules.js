/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  CardBody, CardTitle, Row, Col, CardSubtitle, CardText,
} from 'reactstrap';
import Card from '../card/card';
import './modules.scss';

const Module = () => (
  <div className="m-container cd-view view">
    <Row>
      <Col sm={{ size: 'auto' }}>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
          Some quick example text to build on the card title and make up the bulk of the content.
            </CardText>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
      <Col sm={{ size: 'auto' }}>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
          Some quick example text to build on the card title and make up the bulk of the content.
            </CardText>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
      <Col sm={{ size: 'auto' }}>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
          Some quick example text to build on the card title and make up the bulk of the content.
            </CardText>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);


export default Module;
