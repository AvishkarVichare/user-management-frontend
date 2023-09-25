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
        userToEdit.current = user;
    }


    const capitalizeFirstWord = (str)=>{
        return str.split(' ').map(word=>{
            return word.charAt(0).toUpperCase()+word.slice(1)
        }).join(' ');
    }


  return (
    <div className=' bg-[#23222d] py-6 px-4 rounded-xl text-[15px] md:text-[18px] lg:text-[20px] flex-col md:flex  justify-between w-[300px] md:w-[500px] lg:w-[700px] '>

    <div>
    <span className='font-semibold'> Name:</span>
    <span className='text-[#8D8B95]'> {capitalizeFirstWord(user.name)}</span>
    </div>


    {/* button group */}    
    <div className='mt-3 md:mt-0 mr-[15px] md:mr-[20px] lg:mr-[30px] flex gap-4'>
        <button onClick={handleEdit} name={user.name} className='text-[#225ee9] font-semibold'>Edit</button>
        <button onClick={()=>handleDelete(user._id)} className='text-[#feaf03] font-semibold'>Delete</button>
    </div>

    </div>
  )
}

export default UserCard