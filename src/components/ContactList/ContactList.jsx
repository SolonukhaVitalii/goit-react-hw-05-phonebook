import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact}) => (
    <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
                <p className={s.name}>{name}:</p>
                <p className={s.number}>{number}</p>
                <button className={s.button} onClick={(() => onDeleteContact(id))}>Удалить</button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;