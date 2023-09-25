import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const EditUserModal = ({setShowEditModal, userToEdit}) => {
    const [name, setName] = useState(userToEdit.current.name);

    const handleSubmit = async(e)=>{
      try{
        e.preventDefault();
        if(!name){
            toast.error('Name cannot be empty')
            return;
        }

        const {data} = await axios.put(`http://127.0.0.1:8000/api/v1/user/edit/${userToEdit.current._id}`,{name});
        console.log(data)
        if(data.success){
            toast.success("User updated succesfully");
            setName("")
            setShowEditModal(false);
        }
      }catch(err){
        console.log(err);
        toast.error(err.message)
      }
    }

  return (
    <div className='flex justify-center items-center w-full h-full before:bg-gray-500 before:w-full before:h-full before:fixed before:opacity-[.3] z-[2] fixed top-0 '>
        <form onSubmit={handleSubmit} className='text-[15px] md:text-[20px] lg:text-[22px] w-[320px] md:w-[500px] lg:w-[600px] rounded-xl relative z-[5] bg-[#171721] p-20 pt-8 flex flex-col items-center gap-4'>
            <div className='text-[#d5defb] font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] mb-6'>
                Edit User
            </div>
            <input className='px-4 py-2 rounded-xl w-[250px] md:w-[300px] lg:w-[400px]'  onChange={(e)=>setName(e.target.value)} value={name} name='name' placeholder='Enter a Name' />
            <div className='flex gap-4'>
            <button className='text-semibold bg-[#d5defb] text-[#171721] w-fit px-4 py-2 rounded-xl'>
                Done
            </button>
            <button onClick={()=>setShowEditModal(false)}  className='text-semibold bg-[#a1a5b2] text-[#171721] w-fit px-4 py-2 rounded-xl'>
                Cancle
            </button>
            </div>
      
        </form>
    </div>
  )
}

export default EditUserModal