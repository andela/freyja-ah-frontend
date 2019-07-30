import React from 'react';
import PropTypes from 'prop-types';
import './contacts.scss';

const Contacts = ({ contacts, clickedContact, click }) => (
  <div className="contacts">
    <h4>All Messages</h4>
    {contacts.map(contact => (
      <div
        className="contactDetails"
        onClick={() => click(contact.id)}
        style={{ backgroundColor: clickedContact === contact.id && '#afafaf' }}
        role="presentation"
        key={contact.id}
      >
        <h5>
          {contact.name}
        </h5>
        <p>
          {contact.message}
        </p>
      </div>
    ))}
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickedContact: PropTypes.number,
  click: PropTypes.func,
};
export default Contacts;
