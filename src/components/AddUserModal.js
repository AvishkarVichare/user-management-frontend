import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddUserModal = ({show, setShow}) => {
    const [name, setName] = useState(""); //for having name of user

    // submit handler function 
    const handleSubmit = async(e)=>{
      try{
        e.preventDefault();
        if(!name){
            toast.error('Name cannot be empty') //toast message
            return;
        }

        // sending post request to our server using enpoints we have created 
        const {data} = await axios.post('http://127.0.0.1:8000/api/v1/user/create',{name});
        // console.log(data)
        if(data.success){
            toast.success("User Created succesfully");
            setName("")
            setShow(false);
        }
      }catch(err){
        console.log(err);
        toast.error(err.message)
      }
    }

  return (
    <div className='flex justify-center items-center w-full  h-full before:bg-gray-500 before:w-full before:h-full before:fixed before:opacity-[.3]  z-[2] fixed top-0 '>
        
        //form
        <form onSubmit={handleSubmit} className=' text-[15px] md:text-[20px] lg:text-[22px] w-[320px] md:w-[500px] lg:w-[600px] rounded-xl relative z-[5] bg-[#171721] p-20 pt-8 flex flex-col items-center gap-4'>
            <div className='text-[#d5defb] font-bold text-[1.5rem] md:text-[2rem]  lg:text-[2.3rem] mb-6'>
                Create User
            </div>
            <input className='px-4 py-2 rounded-xl w-[250px] md:w-[300px] lg:w-[400px]' onChange={(e)=>setName(e.target.value)} name='name' placeholder='Enter a Name' />
           
        {/* submit button  */}
         <button className='text-semibold bg-[#d5defb] text-[#171721] w-fit px-4 py-2 rounded-xl'>
                Create
            </button>

        {/* close modal button  */}
        <button onClick={()=>setShow(false)} className='absolute top-2 text-sm right-2 border-2 border-white p-3 rounded-xl text-white'>
            Close
        </button>
        </form>
    </div>
  )
}

export default AddUserModal