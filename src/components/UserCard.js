import React, { useState } from 'react'

const UserCard = () => {

    const [show, setShow] = useState(false);


  return (
    <div className=' bg-[#23222d] py-6 px-4 rounded-xl text-[20px] flex justify-between'>

    <div>
    <span className='font-semibold'> Name:</span>
    <span className='text-[#8D8B95]'> Avishkar</span>
    </div>


    {/* button group */}
    <div className='mr-[30px] flex gap-4'>
        <button className='text-[#225ee9] font-semibold'>Edit</button>
        <button className='text-[#feaf03] font-semibold'>Delete</button>
    </div>

    </div>
  )
}

export default UserCard