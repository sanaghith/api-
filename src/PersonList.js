import React from 'react'
import Personcard from './Personcard';
const PersonList = ({data}) => {
  return (
    <div className='d-flex flex-wrap justify-content-start p-3'>
       {
        data.map((elm,i)=>{
          return(
          <div key={i} className='m-4'>
          <Personcard elm={elm}/>
          </div>)
        })
       } 
    </div>
  )
}

export default PersonList