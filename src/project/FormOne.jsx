import React, { useState } from 'react'
import ToDo from './Form/ToDo'
import List from './Form/List'

const FormOne = () => {
  const [editObj, setEditObj] = useState({})
  const handleEdit = (data) =>{
    setEditObj(data)
  }
  return (
    <>
      <main className='border h-dvh grid grid-cols-2 gap-3 p-3 bg-lime-200 [&_section]:border'>
        <ToDo editObj = {editObj} setEditObj = {setEditObj} />
        <List handleEdit={handleEdit} />
      </main>
    </>
  )
}

export default FormOne
