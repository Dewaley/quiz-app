import React from 'react';
import Dropdown from '../components/Dropdown';
import useAxios from '../hooks/useAxios';

const Settings = () => {
  const {response,error,loading} = useAxios({url: 'api_category.php'})
  if(loading) {
    return (
      <div
        class='w-full flex flex-col items-center justify-center'
      >
        <div class='loader ease-linear rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600 spin-slow h-12 w-12 mb-4'></div>
        <h2 class='text-center text-white text-xl font-semibold'>Loading...</h2>
        <p class='w-1/3 text-center text-white'>
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    );
  }
  return (
    <form className='md:w-96'>
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
      <button type='submit' className='w-full py-2 mt-2 bg-blue-500 rounded'>
        Get Started
      </button>
    </form>
  );
};

export default Settings;
