import React from 'react'
import { useState} from 'react'
const input_tab = () => {
  const [ingridients, setIngridients] = useState([]); 
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      setIngridients([...ingridients, input]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setIngridients(ingridients.filter((_, i) => i !== index));
  };

  return (
    <div className='flex flex-col items-center py-10 mt-20'>
      <h1 className='text-3xl font-bold mb-6'>Enter Your Ingredients</h1>
      <div className="flex mb-6 w-1/2">
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Enter Ingredients Available...'
          className='flex-1 p-4 rounded-l-full border shadow-md'
        />
        <button
          onClick={handleAdd}
          className='bg-black text-white px-6 rounded-r-full'
        >
          Add
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 w-3/4">
        {ingridients.map((item, idx) => (
          <div key={idx} className="bg-gray-200 rounded-lg p-4 flex justify-between items-center">
            <span>{item}</span>
            <button
              onClick={() => handleDelete(idx)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>

  )
}


export default input_tab