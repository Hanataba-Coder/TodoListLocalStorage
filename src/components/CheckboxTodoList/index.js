import React from 'react';
import { CheckboxContainer } from './styled';

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer {...props}>
    <input type="checkbox" checked={checked} {...props} />
    <span className="checkmark"></span>
  </CheckboxContainer>
);

export default Checkbox;
