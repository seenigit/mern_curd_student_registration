import React from 'react';

const FormButton = (props) => {
  return(
    <button
      className = {props.className}
      onClick= {props.action}
      type= {props.type}
      disabled={props.disabled}
    >
      {props.title}
    </button>)
}

export default FormButton;