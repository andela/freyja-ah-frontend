import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Input from '../Inputs/Input';
import Button from '../Button';
import * as actions from '../../../store/actions/community';
import './community.scss';
import sideLogo from '../../assets/images/logo.png';

export class Community extends PureComponent {
  state = {
    messages: [
      {
        title: 'communication',
        post:
          'Nonverbal communication describes the processes of conveying a type of information in the form of non-linguistic representations. Examples of nonverbal communication include haptic communication, chronemic communication, gestures, body language, facial expressions, eye contact etc. Nonverbal communication also relates to the intent of a message. Examples of intent are voluntary, intentional movements like shaking a hand or winking, as well as involuntary, such as sweating.[3] Speech also contains nonverbal elements known as paralanguage, e.g. rhythm, intonation, tempo, and stress. It affects communication most at the subconscious level and establishes trust. Likewise, written texts include nonverbal elements such as handwriting style, the spatial arrangement of words and the use of emoticons to convey emotion.',
        author: 'bolaji',
        key: 1,
        role: 'trainer',
      },
      {
        title: 'Dealing with customer',
        post:
          'Your company’s most vital asset is its customers, so you need to make sure you’re dealing with your customers properly. Without them, you would not, and could not, exist in business. Sure, you can attract new customers with unique products, free gifts, or reducing your prices; but if you’re not creating relationships with them, they’re not going to return or recommend you.',
        author: 'chisom',
        key: 2,
        role: 'learner',
      },
      {
        title: 'communication',
        post: 'communication is the key',
        author: 'chisom',
        key: 2,
        role: 'trainer',
      },
      {
        title: 'communication',
        post: 'communication is the key',
        author: 'chisom',
        key: 4,
        role: 'learner',
      },
    ],
  };

  componentDidMount() {
    const { getCommunityMessages } = this.props;
    getCommunityMessages();
  }

  render() {
    const { messages } = this.state;
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
            <div className="input_section">
              <Input id="inp" placeholder="Title" />
              <textarea rows="3" placeholder="enter your message..." />
              <Button text="Post message" classname="com_btn" />
              <hr />
            </div>
            <div className="posts">
              {messages.map(msg => (
                <div className="posts_section">
                  <h4 className="post_title">{msg.title}</h4>
                  <p className="post_body">{msg.post}</p>
                  <p className="poster_name">{msg.author}</p>
                  <p className="poster_role">{msg.role}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getCommunityMessages: () => actions.getCommunityMessages(),
};

Community.propTypes = {
  getCommunityMessages: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community));
