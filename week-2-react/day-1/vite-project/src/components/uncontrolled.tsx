import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Nama yang di submit: ' + nameInputRef.current.value);
    nameInputRef.current.value = ''; 
  };

  return (
    <form 
    onSubmit={handleSubmit}
     className="text-center mt-12"
    >
      <h2 className='mb-3'>Uncontrolled Component</h2>
      <label>
        Nama:
        <input 
        type="text" 
        ref={nameInputRef} 
        defaultValue="John Doe"
        className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100' 
        />
      </label>
      <button 
        type="submit"
        className='flex-1 w-full py-2 mt-2 bg-blue-500 text-white p-1 rounded-lg hover:bg-blue-600 transition'
      >Submit
      </button>
    </form>
  );
}

export default UncontrolledForm