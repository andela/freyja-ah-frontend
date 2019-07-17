import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserDetails from '../../components/UserDetails/UserDetails';
import ProfileDetails from './ProfileDetails';
import './profile.scss';
import * as actions from '../../../store/actions/profile';
import Button from '../../components/Button';

export class Profile extends React.Component {
  componentDidMount() {
    const { getProfile, userId } = this.props;
    getProfile(userId);
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Header />
        <Row>
          <Col md="3" lg="2" sm="3">
            <Sidebar>
              <ProfileDetails profile={profile} />
            </Sidebar>
          </Col>
          <Col md="9" lg="10" sm="9">
            <div className="main">
              <h2 style={{ color: '#6D6666' }}>
                Welcome back
              </h2>
              <div className="memberCard">
                <h5>
                  You have not enrolled in any course
                  <Button type="button" text="Start Journey" />
                </h5>
              </div>
              <UserDetails profile={profile} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  userId: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  profile: state.profile.data,
  userId: state.auth.user.userId,
});

const mapDispatchToProps = dispatch => ({
  getProfile: userId => dispatch(actions.getProfile(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
