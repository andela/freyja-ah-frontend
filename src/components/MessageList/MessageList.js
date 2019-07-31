import React, { Component } from 'react';
import './messageList.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { messages, clickedContact, userId } = this.props;
    const showMessages = messages.filter(message => (message.receiverId !== null
        && message.receiverId === clickedContact) || message.senderId === clickedContact);
    return (
      <div className="msg-view">
        {showMessages.map(message => (
          <div className={cx('message', message.senderId === userId ? 'sentMsg' : 'receivedMsg')} key={message.id}>
            <p className="message-body">
              {message.body}
            </p>
            <span className="message-time"> 11:10am </span>
          </div>
        ))}
      </div>
    );
  }
}

MessageList.propTypes = {
  userId: PropTypes.number.isRequired,
  clickedContact: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
};
export default MessageList;
