import React from 'react';

const PhoneField = ({ section, phoneFields, onAddField, onRemoveField, onChange }) => {
  return (
    <>
      {/* <label htmlFor={`${section}-phone`} className="form-label">
        Phone
      </label> */}
      {phoneFields.map((phone, index) => (
        <div className="input-group mb-3" key={`${section}-${index}`}>
          <input
            type="text"
            className="form-control"
            id={`${section}-phone-${index}`}
            name={`${section}-phone-${index}`}
            value={phone}
            placeholder="Enter phone number"
            onChange={(e) => onChange(section, index, e.target.value)}
          />
          {phoneFields.length > 1 && (
            <span
              className="input-group-text"
              style={{ cursor: 'pointer' }}
              onClick={() => onRemoveField(section, index)}
            >
              <i className="fas fa-minus" style={{ fontSize: '18px' }}></i>
            </span>
          )}
          {index === phoneFields.length - 1 && (
            <span
              className="input-group-text"
              style={{ cursor: 'pointer' }}
              onClick={() => onAddField(section)}
            >
              <i className="fas fa-plus" style={{ fontSize: '18px' }}></i>
            </span>
          )}
        </div>
      ))}
    </>
  );
};

export default PhoneField;
