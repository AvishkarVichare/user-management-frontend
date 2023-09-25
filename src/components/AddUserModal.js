import React, { useState } from 'react'

const AddUserModal = ({show, setShow}) => {
    const [name, setName] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='flex justify-center items-center w-full h-full before:bg-gray-500 before:w-full before:h-full before:absolute before:opacity-[.3] z-[2] absolute top-0 '>
        <form onSubmit={handleSubmit} className=' text-[22px] w-[600px] rounded-xl relative z-[5] bg-[#171721] p-20 pt-8 flex flex-col items-center gap-4'>
            <div className='text-[#d5defb] font-bold text-[2.3rem] mb-6'>
                Create User
            </div>
            <input className='px-4 py-2 rounded-xl w-[400px]' onChange={(e)=>setName({[e.target.name]:e.target.value})} name='name' placeholder='Enter a Name' />
            <button className='text-semibold bg-[#d5defb] text-[#171721] w-fit px-4 py-2 rounded-xl'>
                Create
            </button>
        <button onClick={()=>setShow(false)} type='submit' className='absolute top-2 text-sm right-2 border-2 border-white p-3 rounded-xl text-white'>
            Close
        </button>
        </form>
    </div>
  )
}

export default AddUserModal