import React from 'react'
import UserCard from './UserCard'

const CardDisplay = () => {
    return (
        <div className='h-[100vh] w-[100vw]  bg-[#171721] text-[#b7b6b6]'>

            <div className='text-[#fff] border-b-[.5px] py-4 font-bold text-center text-3xl'>
                Welcome to our App
            </div>
            <div className='flex flex-col gap-2 w-[500px] mx-auto pt-[200px]'>
                <div className='text-[#d5defb] text-center my-4 text-[22px] font-semibold'>
                    All Users
                </div>
                <UserCard />
                <UserCard />
                <UserCard />

            </div>
        </div>
    )
}

export default CardDisplay