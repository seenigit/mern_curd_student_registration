import React from 'react';
import FormError from "./formError";

const FormFieldGroup = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <input
        className={props.className}
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleOnChange}
        placeholder={props.placeholder}
      />
      <FormError errorMessage={props.formValError}/>
    </div>
  )
}

export default FormFieldGroup;