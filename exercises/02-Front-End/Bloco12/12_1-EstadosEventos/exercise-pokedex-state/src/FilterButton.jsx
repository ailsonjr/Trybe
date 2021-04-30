import React from 'react';

const FilterButton = ({ className, children, disabled, onClick }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </button>
);

export default FilterButton;
