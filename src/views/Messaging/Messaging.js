import React, { Fragment, Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageList from '../../components/MessageList/MessageList';
import Header from '../../components/Header/Header';
import Input from '../../components/Inputs/Input';
import './messaging.scss';
import Button from '../../components/Button';
import Contacts from '../../components/Contacts/Contacts';

class Messaging extends Component {
  state = {
    clickedContact: null,
  }

  setClicked = (id) => {
    this.setState({ clickedContact: id });
  }

  render() {
    const icon = <FontAwesomeIcon icon="paper-plane" />;
    const contacts = [
      { id: 1, name: 'Johnson', message: 'Hello my brother, Its all gon be good', time: 'Dec 12' },
      { id: 2, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 3, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 4, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 5, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 6, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 7, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 8, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 9, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 10, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 11, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
      { id: 12, name: 'Johnson', message: 'Hello my brother, Its all gon be good' },
    ];
    const { clickedContact } = this.state;
    return (
      <Fragment>
        <Header />
        <Row style={{ paddingLeft: '60px' }}>
          <Col lg="3" style={{ paddingRight: '0', paddingLeft: '0', border: '1px solid black' }}>
            <Sidebar>
              <Contacts
                contacts={contacts}
                clickedContact={clickedContact}
                click={this.setClicked}
              />
            </Sidebar>
          </Col>
          <Col lg="8" style={{ marginTop: '52px', paddingLeft: '0', border: '1px solid black' }}>
            <MessageList />
            <div className="messageInput">
              <div>
                <Input type="text" placeholder="Type a message" id="input" />
                <Button type="text" text={icon} classname="sendBtn" />
              </div>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Messaging;
