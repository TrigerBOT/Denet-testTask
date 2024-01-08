import React from 'react';
import Select from 'react-select';
const DataList = () => {
  const options = [
    { value: 'By name', label: 'By name' },
    { value: 'By type', label: 'By type' },
    { value: 'By size', label: 'By size' },
    { value: 'By time', label: 'By time' },
  ];

  return (
    <div className="custom-datalist">
      <Select
        options={options}
        selectedOption={'By type'}
        placeholder={'Sort by name'}
        classNamePrefix="custom-select"
      />
    </div>
  );
};

export default DataList;
