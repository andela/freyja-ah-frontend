import React, { PureComponent } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CardBody } from 'reactstrap';
import propTypes from 'prop-types';
import Card from '../Card/Card';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';
import * as actions from '../../../store/actions/authActions';

export class VerifyUser extends PureComponent {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { token } = params;
    const { verifyAuth, history } = this.props;
    // verifyAuth(token, history);
    console.log(token);
    
  }

  render() {
    return (
      <div className="containers">
        <div className="bg-image" />
        <Header />
        <Card>
          <CardBody />
        </Card>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  verifyAuth: actions.verifyAuthUser,
};

VerifyUser.propTypes = {
  history: propTypes.shape({ push: propTypes.func }),
  verifyAuth: propTypes.func,
  match: propTypes.shape({ params: propTypes.shape({ token: propTypes.string }) }),
};

export default connect(null, mapDispatchToProps)(withRouter(VerifyUser));
