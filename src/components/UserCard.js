import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const UserCard = ({user, userToEdit, setUserList, userList, setShowEditModal}) => {


    const handleDelete = async(userId)=>{
      try{
        const {data} =  await axios.delete(`http://127.0.0.1:8000/api/v1/user/delete/${userId}`);

        if(data.success){
            setUserList(userList?.filter(e=>e._id!=userId))
            console.log(data);
            toast.success("Succesfully Deleted User")
        }

      }catch(err){
        console.log(err);
        toast.error('Something went wrong');
      }
    }

    const handleEdit = ()=>{
        setShowEditModal(true)
        userToEdit.current = user.name;
    }


  return (
    <div className=' bg-[#23222d] py-6 px-4 rounded-xl text-[20px] flex justify-between'>

    <div>
    <span className='font-semibold'> Name:</span>
    <span className='text-[#8D8B95]'> {user.name}</span>
    </div>


    {/* button group */}    
    <div className='mr-[30px] flex gap-4'>
        <button onClick={handleEdit} name={user.name} className='text-[#225ee9] font-semibold'>Edit</button>
        <button onClick={()=>handleDelete(user._id)} className='text-[#feaf03] font-semibold'>Delete</button>
    </div>

    </div>
  )
}

export default UserCard