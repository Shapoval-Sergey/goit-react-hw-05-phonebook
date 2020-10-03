import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactListItem from "./ContactListItem/ContactListItem";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={s.list}>
    {contacts.map(({ id, ...prop }) => (
      <CSSTransition key={id} timeout={250} classNames={s}>
        <ContactListItem
          key={id}
          {...prop}
          onRemove={() => onRemoveContact(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
