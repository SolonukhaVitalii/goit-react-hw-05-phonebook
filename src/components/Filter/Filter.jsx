import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <label htmlFor="">Find contacts by name
        <input className={s.input}
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Filter;