import React from 'react';

const ApiTypeSelector = ({ apiType, onApiTypeChange }) => (
  <div className="api-type-selector">
    <label>
      <input
        type="radio"
        name="api-type"
        value="cocktails"
        checked={apiType === 'cocktails'}
        onChange={onApiTypeChange}
      /> Cocktails
    </label>
    <label>
      <input
        type="radio"
        name="api-type"
        value="food"
        checked={apiType === 'food'}
        onChange={onApiTypeChange}
      /> Food
    </label>
  </div>
);

export default ApiTypeSelector;
