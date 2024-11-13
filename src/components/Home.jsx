import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPastes, updatetoPastes } from '../store/PasteSlice'

const Home = () => {
  
  const {id} = useParams() 

  const [title,setTitle] = useState('')
  const [value,setValue] = useState('')
  const [searchParams,setsearchParams] = useSearchParams() 
  const pasteId  = searchParams.get("pasteId")

  const allPastes = useSelector((store)=>store.paste.pastes)

  const dispatch = useDispatch()

  const createPaste = () => {
    const paste = {
      title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),
      createAt: new Date().toISOString()
    }

    if(pasteId){
      dispatch(updatetoPastes(paste))
    }
    else{
      dispatch(addToPastes(paste))
    }

    setTitle('')
    setValue('')
    setsearchParams('')
  }
 

  useEffect(()=>{
    if(pasteId){
      const find = allPastes.find((item)=>{
        return item._id === pasteId
      })

      setTitle(find.title)
      setValue(find.content)
    }
  },[pasteId])

  return (
    <div className='w-full flex justify-center  mt-8 r'>
      <div className=' w-6/12'> 
<div className='  full flex gap-9  m-5'>
      <input className='w-9/12 rounded-lg p-2 text-xl   ' placeholder='Enter Title'  type="text" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <button className='bg-black text-white px-3 rounded-lg' onClick={createPaste}>{pasteId ? 'Update My Paste' : 'Create My Paste' }</button>
      </div>

      <div className='w-full flex justify-center px-4'>
      <textarea className='w-full text-xl rounded-lg p-2' rows={15} name="" id="" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter Description'></textarea>
      </div>
      </div>
      
    </div>
  )
}

export default Home