import React from 'react';

const ApiTypeSelector = ({ apiType, onApiTypeChange }) => (
  <div className="flex flex-row justify-center gap-x-20">
    <label className="cursor-pointer font-semibold text-indigo-600 text-xl">
      <input
        type="checkbox"
        name="api-type"
        value="cocktails"
        checked={apiType === 'cocktails'}
        onChange={onApiTypeChange}
      /> Cocktails
    </label>
    <label className='cursor-pointer font-semibold text-indigo-600 text-xl'>
      <input
        type="checkbox"
        name="api-type"
        value="food"
        checked={apiType === 'food'}
        onChange={onApiTypeChange}
      /> Food
    </label>
  </div>
)

export default ApiTypeSelector;


// import React from 'react';
// import Switch from 'react-switch';

// const ApiTypeSelector = ({ apiType, onApiTypeChange }) => (
//   <div className="api-type-selector">
//     <label>
//       <span className="text-sm">Cocktails</span>
//       <Switch
//         onChange={onApiTypeChange}
//         checked={apiType === 'cocktails'}
//         onColor="#86d3ff"
//         onHandleColor="#2693e6"
//         // onClick={onApiTypeChange}
//         handleDiameter={30}
//         uncheckedIcon={false}
//         checkedIcon={false}
//         boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//         activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
//         height={20}
//         width={48}
//         className="react-switch"
//         id="material-switch"
//       />
//       <span className="text-sm">Food</span>
//     </label>
//   </div>
// );
  
// export default ApiTypeSelector;