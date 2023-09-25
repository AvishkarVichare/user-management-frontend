import React, { useEffect, useRef, useState } from 'react'
import UserCard from './UserCard'
import Add from '../assets/add.png'
import AddUserModal from './AddUserModal';
import axios from 'axios';
import toast from 'react-hot-toast';
import EditUserModal from './EditUserModal';

const CardDisplay = () => {


    const [show, setShow] = useState(false); //for create user modal
    const [showEditModal, setShowEditModal] = useState(false); //for edit user modal
    const [userList, setUserList] = useState([]);

    const userToEdit = useRef();

    const getUserList = async () => {
      try{
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/user/get');
        console.log(data)
        setUserList(data.users);
      }catch(err){
        console.log(err)
        toast.error("Something went wrong with server")
      }
    }

    useEffect(() => {
        getUserList()
    }, [show])

    return (
        <div className='relative h-[100vh] w-[100vw] overflow-y-scroll bg-[#171721] text-[#b7b6b6] pb-10'>

            <div className='text-[#fff] border-b-[.5px] py-4 font-bold text-center text-3xl'>
                Welcome to our App
            </div>
            <div className='flex flex-col gap-2 w-[700px] mx-auto pt-[80px]'>
                <div className='text-[#d5defb] text-center my-4 text-[22px] font-semibold'>
                    All Users
                </div>
                {/* //displaying data */}
                {
                    userList.map(user => <UserCard key={user._id} user={user} userToEdit={userToEdit} userList={userList} setShowEditModal={setShowEditModal} setUserList={setUserList}/>)
                }

            </div>

            <button onClick={() => setShow(true)} className='fixed bottom-20 right-20 w-[70px] h-[70px] rounded-xl bg-[#d5defb] flex justify-center items-center'>
                <img src={Add} alt="" />
            </button>

            {
                show && <AddUserModal setShow={setShow} />
            }
            {
                showEditModal && <EditUserModal userToEdit={userToEdit} setShowEditModal={setShowEditModal}/>
            }
        </div>
    )
}

export default CardDisplay