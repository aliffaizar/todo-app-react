import {FaTimes, FaCheck} from 'react-icons/fa'

const TodoList = ({data, handleDelete, handleCheck}) => {
  return (
    <div className='px-5 pb-3 border-b-2 space-y-2'>
        {data.map((data)=>(
            <div className='px-2 py-1 flex flex-row justify-between items-center rounded bg-gray-100' key={data.id}>
                <h3 className={data.note ? "line-through font-medium" : "font-medium"}>{data.title}</h3>
                <div className='space-x-2 inline-flex'>
                    <FaCheck className={data.note ? "cursor-pointer text-black/70" : "text-cyan-500 cursor-pointer"} onClick={()=>handleCheck(data.id)} />
                    <FaTimes className='text-red-500 cursor-pointer' onClick={()=>handleDelete(data.id)} />
                </div>
            </div>))}
    </div>
  )
}

export default TodoList