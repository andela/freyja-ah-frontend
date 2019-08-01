import React from 'react';
import { Card as ReactStrapCard } from 'reactstrap';
import propTypes from 'prop-types';

const Card = ({ children, cardStyle }) => (
  <ReactStrapCard className={cardStyle}>
    {children}
  </ReactStrapCard>
);

Card.propTypes = {
  children: propTypes.element,
  cardStyle: propTypes.string,
};

Card.defaultProps = {
  cardStyle: 'c-card',
};
export default Card;
