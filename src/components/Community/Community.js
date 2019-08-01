import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Input from '../Inputs/Input';
import Button from '../Button';
import * as actions from '../../../store/actions/community';
import './community.scss';
import sideLogo from '../../assets/images/logo.png';

export class Community extends PureComponent {
  state = {
    messages: [],
    modal: false,
    messageId: '',
  };

  componentDidMount() {
    const getCommMessages = async () => {
      const { getCommunityMessages } = this.props;
      await getCommunityMessages();
      const { messages } = this.props;
      this.setState({ messages });
    };
    getCommMessages();
  }

  async HandledelCommunityMessage() {
    const { delMessage, getCommunityMessages } = this.props;
    const { messageId } = this.state;
    await delMessage(messageId);
    await getCommunityMessages();
    const { messages } = this.props;
    this.setState({ messages, modal: false });
  }

  toggle(id = '') {
    this.setState(prev => ({
      modal: !prev.modal,
      messageId: id,
    }));
  }


  render() {
    const spinner = (
      <div className="spinner-position">
        <Spinner />
      </div>
    );

    const { messages, modal } = this.state;
    const { loading } = this.props;
    const display = messages.length === 0
      ? (<p>No community Post</p>)
      : (messages.map(msg => (
        <div className="posts_section" key={msg && msg.id}>
          <h4 className="post_title">
            {msg.owner && msg.owner.lastName}
            {' '}
            {msg.owner && msg.owner.firstName}
          </h4>
          <p className="timeCreated">
            <Moment local format="LLLL">
              {msg.createdAt}
            </Moment>
          </p>
          <p className="post_body">{msg.body}</p>
          <p className="poster_name">{msg.owner && msg.owner.userName}</p>
          <p className="poster_role">{msg.owner && msg.owner.role}</p>
          <p className="del" onClick={() => this.toggle(msg.id)} role="presentation">
            <FontAwesomeIcon icon="trash" className="FontAwesomeIcon" />
          </p>
          <hr />
        </div>
      ))
      );

    return (
      <div>
        <Header />
        <div className="main_com">
          <Modal isOpen={modal} toggle={() => this.toggle()}>
            <ModalHeader toggle={() => this.toggle()}>Delete Message</ModalHeader>
            <ModalBody>
           Are you sure?
            </ModalBody>
            <ModalFooter>
              <Button text="Delete" classname="del_btn" onClick={() => this.HandledelCommunityMessage()} />
              {' '}
              <Button text="Cancel" classname="cancel_btn" onClick={() => this.toggle()} />
            </ModalFooter>
          </Modal>
          <Sidebar>
            <div className="d-aside">
              <div className="c-side">
                <span className="c-logo">
                  <img src={sideLogo} alt="logo" />
                  Community
                </span>
              </div>
              <ul className="d-links">
                <li className="module-active">
                  <Link to="/community">Forum</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/payment">Messages</Link>
                </li>
                <li>
                  <Link to="/aboutus">Help</Link>
                </li>
              </ul>
            </div>
          </Sidebar>
          <div className="main_sec">
            <div className="input_section">
              <Input id="inp" placeholder="Title" />
              <textarea rows="3" placeholder="enter your message..." />
              <Button text="Post message" classname="com_btn" />
              <hr />
            </div>
            <div className="posts">
              {loading ? (
                spinner
              )
                : display
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.community.isLoading,
  messages: state.community.allMessages,
  error: state.community.error,
});

const mapDispatchToProps = {
  getCommunityMessages: () => actions.getCommunityMessages(),
  delMessage: id => actions.deleteCommunityMessage(id),
};

Community.propTypes = {
  getCommunityMessages: PropTypes.func,
  loading: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string,
  })),
  delMessage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community));
