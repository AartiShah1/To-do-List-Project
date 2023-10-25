'use client'
import React, { useState } from 'react'


const page = () => {
const[title,setTitle]=useState('')
const[desc,setDesc]=useState('')
const[maintask,setMaintask]=useState([])

const submitHandler=(e)=>{
  e.preventDefault()

setMaintask([...maintask,{title,desc}])

  console.log(maintask)
  console.log(title)
  console.log(desc)
  setTitle('')
  setDesc('')

  // console.log("hello guys")
}


const deleteHandler=(i)=>{
  let copytask=[...maintask]
  copytask.splice(i,1)
  setMaintask(copytask) 
}




let renderTask=<h2>No task Available</h2>

if(maintask.length>0){
  renderTask = maintask.map((t,i)=>{
  return(
    <li key={i} className='flex items-center justify-between mb-8'>
          <div className=' flex m-2 items-center justify-between mb-5 w-2/3 '>
      
              <h5 className='text-2xl font-semibold'>{t.title}</h5>
              <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
           <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
  )
  
  })
}


  return (
    
    <>
     <h1 className='bg-black border-zinc-300 text-white p-3 text-2xl font-bold text-center
      '>TodoList</h1>

      <form onSubmit={submitHandler}>
        <input type="text" className='border-zinc-300 border-2 m-5 px-4 py-2' placeholder='Enter your task here'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        //  console.log(e.target.value)
        }}
        />

        <input type="text" className='border-zinc-300 border-2 m-5 px-4 py-2'placeholder='Enter description here'
        value={desc} onChange={(e)=>{
          setDesc(e.target.value)
          // console.log(e.target.value)
        }}
        />


        <button className='bg-black m-5 text-white px-10 py-1 text-2xl font-bold'>Add task</button>

      </form>

      <hr />

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page
