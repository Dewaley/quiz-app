import React from 'react';
import Dropdown from '../components/Dropdown';

const Settings = () => {
  return (
    <div classname='vw-100 bg-info'>
      <Dropdown label={'Category'} />
      <Dropdown label={'Difficulty'} />
      <Dropdown label={'Type'} />
      <div classname='w-100'>
        <button
          type='button'
          class='btn btn-outline-success w-100 text-white bg-success'
        >
          Successnnnn
        </button>
      </div>
    </div>
  );
};

export default Settings;
