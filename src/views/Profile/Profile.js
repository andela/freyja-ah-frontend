import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserDetails from '../../components/UserDetails/UserDetails';
import ProfileDetails from './ProfileDetails';
import './profile.scss';
import * as actions from '../../../store/actions/profile';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.imageFile = React.createRef();
  }

  componentDidMount() {
    const { getProfile, userId } = this.props;
    getProfile(userId);
  }

  render() {
    const { profile, isLoading, uploadImage } = this.props;
    return (
      <div>
        <Header />
        <Row>
          <Col md="3" lg="2" sm="3">
            <Sidebar>
              <ProfileDetails
                profile={profile}
                loading={isLoading}
                uploadImage={uploadImage}
                imageFile={this.imageFile}
              />
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
                  <Link to="/dashboard">
                    <Button type="button" text="Start Journey" />
                  </Link>
                </h5>
              </div>
              <UserDetails profile={profile} />
            </div>
          </Col>
        </Row>
        <Footer />
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
  isLoading: PropTypes.bool,
  uploadImage: PropTypes.func,
};
const mapStateToProps = state => ({
  profile: state.profile.data,
  userId: state.auth.user.userId,
  isLoading: state.profile.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getProfile: userId => dispatch(actions.getProfile(userId)),
  uploadImage: image => dispatch(actions.uploadImage(image)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
