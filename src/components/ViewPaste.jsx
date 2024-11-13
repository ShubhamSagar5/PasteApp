import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewPaste = () => {
  
  const [title,setTitle] = useState('')
  const [value,setValue] = useState('')
  const {id} = useParams()
   const allPastes = useSelector((store)=>store.paste.pastes)
  console.log(id)
  useEffect(()=>{
    if(id){
      const find = allPastes.find((item)=>{
        return item._id === id
       })
       setTitle(find.title)
       setValue(find.content)
      }
  },[id])

  return (
    <div>
        <p>{title}</p>
        <p>{value}</p>
    </div>
  )
}

export default ViewPaste