import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Filter = ({ value, onChange }) => (
    <CSSTransition in={true} timeout={250} classNames={s} unmountOnExit>
    <label htmlFor="">Find contacts by name
        <input className={s.input}
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
    </CSSTransition>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Filter;