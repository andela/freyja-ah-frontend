import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (isAuthenticated ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { referrer: props.location } }} />)}
      />
    );
  }
}


PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
