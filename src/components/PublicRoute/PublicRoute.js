import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class PublicRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (!isAuthenticated ? <Component {...props} />
          : <Redirect to="/dashboard" />)}
      />
    );
  }
}


PublicRoute.propTypes = {
  component: PropTypes.elementType,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PublicRoute);
