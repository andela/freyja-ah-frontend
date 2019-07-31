import React, { Fragment, Component } from 'react';
import { Row, Col } from 'reactstrap';
import socketIO from 'socket.io-client';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageList from '../../components/MessageList/MessageList';
import Header from '../../components/Header/Header';
import Input from '../../components/Inputs/Input';
import './messaging.scss';
import Button from '../../components/Button';
import Contacts from '../../components/Contacts/Contacts';
import { getMessage, updateMessages } from '../../../store/actions/messageActions';

const socket = socketIO('http://localhost:3000');
class Messaging extends Component {
  state = {
    clickedContact: null,
    messageBody: '',
  }

  componentDidMount() {
    const { getMessages, userId } = this.props;
    getMessages();

    socket.emit('new_client', (userId));

    socket.on('chatting', (messageBody, senderId, receiverId) => {
      this.updateMessageList(messageBody, senderId, receiverId);
    });
  }

  setClickedContact = (id) => {
    this.setState({ clickedContact: id });
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ messageBody: value });
  }

  sendMessage = () => {
    // put this in a redux. and save the action in the redix store
    const { messageBody, clickedContact } = this.state;
    const { userId } = this.props;
    this.updateMessageList(messageBody, userId, clickedContact);
    socket.emit('chatting', messageBody, userId, clickedContact);
  }

  updateMessageList = (messageBody, userId, clickedContact) => {
    const { messages, updateMessage } = this.props;
    const newMessage = { body: messageBody,
      id: messages.length + 1,
      senderId: userId,
      receiverId: clickedContact };
    const newMessageList = messages.concat(newMessage);
    updateMessage(newMessageList);
  }

  render() {
    const icon = <FontAwesomeIcon icon="paper-plane" />;
    const contacts = [
      { id: 1, name: 'Bolaji', message: 'Yo', time: 'Dec 12', ownId: 7, them: 8 },
      { id: 1, name: 'Tunde', message: 'Yo', time: 'Dec 12', ownId: 8, them: 7 },
    ];
    const { clickedContact } = this.state;
    const { userId, messages } = this.props;
    return (
      <Fragment>
        <Header />
        <Row style={{ paddingLeft: '60px' }}>
          <Col lg="3" style={{ paddingRight: '0', paddingLeft: '0', border: '1px solid black' }}>
            <Sidebar>
              <Contacts
                contacts={contacts}
                clickedContact={clickedContact}
                click={this.setClickedContact}
                userId={userId}
              />
            </Sidebar>
          </Col>
          <Col lg="8" style={{ marginTop: '52px', paddingLeft: '0', border: '1px solid black' }}>
            {clickedContact && <MessageList messages={messages} clickedContact={clickedContact} userId={userId} />}
            <div className="messageInput">
              <div>
                <Input type="text" placeholder="Type a message" id="input" onChange={e => this.handleInput(e)} />
                <Button type="text" text={icon} classname="sendBtn" onClick={() => this.sendMessage()} />
              </div>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

Messaging.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.number.isRequired,
  updateMessage: PropTypes.func,
  getMessages: PropTypes.func,
};
const mapStateToprops = state => ({
  userId: state.auth.user.userId,
  messages: state.messages.data,
});

const mapDispatchToProps = dispatch => ({
  getMessages: () => dispatch(getMessage()),
  updateMessage: newMessageList => dispatch(updateMessages(newMessageList)),
});
export default connect(mapStateToprops, mapDispatchToProps)(Messaging);
