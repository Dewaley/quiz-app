import React from 'react';
import Dropdown from '../components/Dropdown';

const Settings = () => {
  return (
    <form classname='md:w-96'>
      <Dropdown label={'Category'} />
      <Dropdown label={'Difficulty'} />
      <Dropdown label={'Type'} />
      <input
        type='number'
        name=''
        id=''
        placeholder='Number of Questions'
        className='w-full py-2.5 outline-none bg-transparent border-b-2 border-b-black'
      />
<button type="submit" className='w-full py-2 mt-2 bg-blue-500 rounded'>Get Started</button>
    </form>
  );
};

export default Settings;
