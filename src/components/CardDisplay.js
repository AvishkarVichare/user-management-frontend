import React, { useState } from 'react'
import UserCard from './UserCard'
import Add from '../assets/add.png'
import AddUserModal from './AddUserModal';

const CardDisplay = () => {


    const [show, setShow] = useState(false);

    return (
        <div className='relative h-[100vh] w-[100vw] overflow-y-scroll bg-[#171721] text-[#b7b6b6] pb-10'>

            <div className='text-[#fff] border-b-[.5px] py-4 font-bold text-center text-3xl'>
                Welcome to our App
            </div>
            <div className='flex flex-col gap-2 w-[700px] mx-auto pt-[120px]'>
                <div className='text-[#d5defb] text-center my-4 text-[22px] font-semibold'>
                    All Users
                </div>
                <UserCard />
          
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
             
            </div>

            <button onClick={()=>setShow(true)} className='fixed bottom-20 right-20 w-[70px] h-[70px] rounded-xl bg-[#d5defb] flex justify-center items-center'>
                <img src={Add} alt="" />
            </button>

        {
            show && <AddUserModal/>
        }
        </div>
    )
}

export default CardDisplay