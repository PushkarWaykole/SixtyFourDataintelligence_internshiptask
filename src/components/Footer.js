import React from 'react'

import paws from '../Images/paws.png'

const Footer = () => {
  return (
    <div className="flex justify-between">
        <div>
            <img src={paws} alt="" />
        </div>
        <p className='m-3'>Designed 
            
           <span className="font-bold"> by Mina Ozgen and Catherine Callahan</span></p>
    </div>
  )
}

export default Footer