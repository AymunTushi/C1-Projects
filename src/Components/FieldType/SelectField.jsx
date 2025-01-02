import React from 'react';

const SelectField = ({ label, name, value, options, onChange }) => {
  return (
    <div className="col-md-6 mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
