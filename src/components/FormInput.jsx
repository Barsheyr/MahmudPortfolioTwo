import React from "react";

const FormInput = ({ label, name, type, defaultValue, size, placeholder }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label font-semibold">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
