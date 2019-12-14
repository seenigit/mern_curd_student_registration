import React from 'react';
import FormError from "./formError";

const FormSelect = (props) => {
  const items = []

  for (const [key, item] of Object.entries(props.items)) {
    items.push(<option key={key} value={key}>{item}</option>)
  }

  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <select 
        className={props.className} 
        id={props.id}
        name={props.name}
        value={props.value} 
        onChange={props.handleOnChange}
      >
       {items}
       
      </select>

      <FormError errorMessage={props.formValError}/>
    </div>
  )
}

export default FormSelect;