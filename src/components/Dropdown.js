const Dropdown = ({ label }) => {
  return (
    <div className='my-5 relative flex flex-col md:w-96'>
      <label htmlFor='' className=''>
        {label}
      </label>
      <select
        name=''
        id=''
        className='py-2.5 outline-none bg-transparent border-b-2 border-b-black'
      >
        <option value='' className='bg-blue-900'>
          Hello
        </option>
        <option value='' className='bg-blue-900'>
          Hello
        </option>
        <option value='' className='bg-blue-900'>
          Hello
        </option>
        <option value='' className='bg-blue-900'>
          Hello
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
