import React from 'react'

var FilterBar = ({}) => (
    <form>
      <fieldset>
        <legend> Filter </legend>
          <span>Select your city</span>
            <select>
              <option value="San Francisco">San Francisco</option>
              <option value=""=>San Mateo</option>
              <option value="">Pleasanton</option>
            </select></br>
            <label>
              M <input type="radio" name="rating" value="yes"/>
            </label>
          <label>
            F <input type="radio" name="rating" value="no" />
          </label></br>

          <input type="submit" value="submit"/>
      </fieldset>
  </form>
)

export default FilterBar