import React, { PureComponent } from 'react';
import {
  Card,
} from 'reactstrap';
import propTypes from 'prop-types';
import './card.scss';

class CardComponent extends PureComponent {
  render() {
    const {
      children, cardStyle,
    } = this.props;
    return (
      <Card className={cardStyle}>
        {children}
      </Card>
    );
  }
}

CardComponent.propTypes = {
  children: propTypes.element,
  cardStyle: propTypes.string,
};
CardComponent.defaultProps = {
  cardStyle: '',
};

export default CardComponent;
