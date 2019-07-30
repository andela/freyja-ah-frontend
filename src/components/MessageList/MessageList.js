/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import './messageList.scss';
import cx from 'classnames';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, body: 'Hey man', senderId: 1, receiverId: 2 },
        { id: 2, body: 'How are you doing bro', senderId: 2, receiverId: 1, sent: true },
        { id: 3, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis. Aenean congue molestie nisl', senderId: 2, receiverId: 1, createdAt: 'today' },
        { id: 4, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1, sent: true },
        { id: 5, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1, sent: true },
        { id: 6, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1 },
        { id: 7, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1, sent: true },
        { id: 8, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1 },
        { id: 9, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1, sent: true },
        { id: 10, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1 },
        { id: 11, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1, sent: true },
        { id: 12, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1 },
        { id: 13, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1, sent: true },
        { id: 14, body: 'HLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus quis augue id convallis', senderId: 2, receiverId: 1 },
      ],
    };
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="msg-view">
        {messages.map(message => (
          <div className={cx('message', message.sent ? 'sentMsg' : 'receivedMsg')} key={message.id}>
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

export default MessageList;
