import React from 'react'

interface IFrom{
    labelName?:string;
    placeholder?:string;
}

function Form({labelName,placeholder}:IFrom) {
  return (
    <form action="" method='get'>
        <label htmlFor="">{labelName}</label>
        <input type="text" placeholder={placeholder} name="" id="" />
    </form>
  )
}

export default Form