import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
// import Input from '../Inputs/Input';
import Button from '../Button';
import { getCommunityMessages, sendMessage } from '../../../store/actions/community';
import './community.scss';
import sideLogo from '../../assets/images/logo.png';

export class Community extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      body: '',
      validationError: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const getCommMessages = async () => {
      const { getCommunityMessages } = this.props;
      await getCommunityMessages();
      const { messages } = this.props;
      this.setState({ messages });
    };
    getCommMessages();
  }

  validateFormInput() {
    const { body } = this.state;

    if (body.length === 0) {
      this.setState({
        validationError: {
          body: 'Please enter a message',
        },
      });
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { body } = this.state;
    // eslint-disable-next-line no-shadow
    const { sendMessage } = this.props;

    if (this.validateFormInput()) {
      sendMessage({ body });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      validationError: {
        [e.target.name]: '',
      },
    });
  }

  render() {
    const { validationError: { body } } = this.state;

    const spinner = (
      <div className="spinner-position">
        <Spinner />
      </div>
    );

    const { messages } = this.state;
    const { loading, sendMsgLoading } = this.props;
    return (
      <div>
        <Header />
        <div className="main_com">
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
            <form onSubmit={this.handleSubmit} className="input_section">
              {/* <Input id="inp" placeholder="Title" /> */}
              <textarea onChange={this.handleChange} rows="5" name="body" placeholder="Enter your message..." />
              <span className="error">{body || ''}</span>

              <Button
                text={sendMsgLoading ? 'Please wait..' : 'Post message'}
                classname="com_btn"
              />
              <hr />
            </form>
            <div className="posts">
              {loading ? (
                spinner
              ) : (
                messages.map(msg => (
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
                    <hr />
                  </div>
                ))
              )}
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
  sendMsgLoading: state.community.sendMsgLoading,
  messages: state.community.allMessages,
  error: state.community.error,
});

const mapDispatchToProps = {
  getCommunityMessages: () => getCommunityMessages(),
  sendMessage,
};

Community.propTypes = {
  getCommunityMessages: PropTypes.func,
  sendMessage: PropTypes.func,
  loading: PropTypes.bool,
  sendMsgLoading: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community));
