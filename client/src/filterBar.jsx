import React from 'react';

var FilterBar = (props) => (
      <form data-name="Email Form" id="email-form" name="email-form">
        <select className="w-select" id="field" name="field" onChange={props.handleChange}>
          <option value="">Select one...</option>
          <option value="First">San Francisco</option>
          <option value="Second">San Mateo</option>
          <option value="Third">Pleasanton</option>
        </select>
      </form>
);

export default FilterBar;