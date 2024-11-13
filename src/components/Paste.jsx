import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { removeFromPastes } from '../store/PasteSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Paste = () => {
 
  const dataPastes = useSelector((store)=>store.paste.pastes)
  const dispatch  = useDispatch() 

  const [searchText,setSeacrhText] = useState('')
  const navigate = useNavigate()

  const filterData = dataPastes.filter((item)=>{
   return  item.title.toLowerCase().includes(searchText.toLowerCase())
  }) 


  const deletePaste = (id) => {
    dispatch(removeFromPastes(id))
  }
  

  const handleCopyToClipboard = (content) => {
    navigator.clipboard.writeText(content)
    toast.success('copy to clipboard')
  }

  const handleView = (id) => {
    navigate(`/pastes/${id}`)
  }

  const handleEdit = (id) => {
    navigate(`/?pasteId=${id}`)
  }

  return (
    <div className='m-2 flex flex-col mt-10 items-center'>
    <div className='w-full flex justify-center m-5'>
        <input type="text"  className="w-8/12 rounded-lg py-1 px-2 text-xl outline-none" placeholder='Search Pastes' name="" id="" value={searchText} onChange={(e)=>setSeacrhText(e.target.value)} />
    </div>
    <div className='w-full flex flex-col gap-3 items-center'>
      {
        filterData.length > 0 && 
        filterData.map((item)=>{
          return (
            <div className='border rounded-lg w-8/12  text-white p-2 '>
              <div className='flex gap-2 justify-between'>
                <p className='text-3xl'>{item.title}</p>
                <div className='flex gap-2 justify-center items-center'>
                <buttton className="bg-black px-2 py-1 rounded-lg" onClick={()=>handleEdit(item._id)} ><MdEdit size={20}/></buttton>
                  <buttton className="bg-black px-2 py-1 rounded-lg" onClick={()=>handleView(item._id)}><IoMdEye size={20}/></buttton>
                <buttton className="bg-black px-2 py-1 rounded-lg" onClick={()=>handleCopyToClipboard(item.content)} ><FaRegCopy size={20}/></buttton>
                <buttton onClick={()=>deletePaste(item._id)}  className="bg-black px-2 py-1 rounded-lg"><MdDeleteOutline size={20}/></buttton>
                </div>
              </div>
              <div>
                <p className='text-xl'>{item.content}</p>
                <p>{item.createAt}</p>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Paste