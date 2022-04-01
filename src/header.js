import React from 'react'
import {FaPlus, FaTimes} from 'react-icons/fa'

const Header = ({handleOpenForm, openForm}) => {
  return (
    <div className='flex flex-row justify-between items-center border-b-2 pb-3 px-5'>
        <h1 className='text-3xl font-bold'>Todo App</h1>
        <button 
            className={!openForm ? 'p-1 bg-cyan-500 text-white rounded-full' : 'p-1 bg-red-500 text-white rounded-full'} 
            onClick={handleOpenForm}
        >
            {!openForm ? <FaPlus className='w-5 h-5' /> : <FaTimes className='w-5 h-5' /> }
        </button>
    </div>
  )
}

export default Header