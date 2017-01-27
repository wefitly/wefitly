import React from 'react';

var FilterBar = (props) => (
  <form >
      <span>Select your city </span>
      <select onChange={props.handleChange} >
        <option value="San Francisco">San Francisco</option>
        <option value="San Mateo">San Mateo</option>
        <option value="Pleasanton">Pleasanton</option>
      </select>
      <p></p>
  </form>
);

export default FilterBar;