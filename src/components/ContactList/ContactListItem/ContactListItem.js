import React from "react";
import PropTypes from "prop-types";

import s from "./ContactListItem.module.css";

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <li key={id} className={s.item}>
      <p>{name}:</p>
      <p>{number}</p>
      <section className={s.sect__btn}>
        <button className={s.btn} type="button" onClick={onRemove}>
          Delete
        </button>
      </section>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
