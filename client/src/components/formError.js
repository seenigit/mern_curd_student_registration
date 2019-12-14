import React from 'react';

const validationError = {
  color: '#FF0000',
  fontSize: `${12}px`,
  display: 'block'
};

const FormError = (props) => {
  return (<div>
      {props.errorMessage !== null && (<div style={validationError}>
        {props.errorMessage}
      </div>)}</div>
  )
}

export default FormError