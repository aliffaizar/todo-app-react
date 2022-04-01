import {useState} from 'react'
import { uid } from 'uid'

const Form = ({submitData}) => {
    const [title, setTitle] =useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!title) {
            alert('please add title')
            return
        }
        submitData ({title, 'note': false, "id": uid()})
        setTitle('')
    }
  return (
    <div className='px-5 pb-3 border-b-2 space-y-2'>
        <h2 className='text-xl font-medium'>Add todo</h2>
        <form className='flex space-x-3' onSubmit={handleSubmit}>
            <input 
                placeholder='Add todo'
                type="text" 
                className='rounded ring-0 focus:ring-cyan-500 focus:border-cyan-500 px-2 py-1 w-full'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <button className='bg-cyan-500 px-5 py-1 rounded text-white'>Save</button>
        </form>
    </div>
  )
}

export default Form