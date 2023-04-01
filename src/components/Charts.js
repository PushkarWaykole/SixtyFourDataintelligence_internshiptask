import React from 'react'



import Linechart1 from './Linechart1.js'
import Linechart2 from './Linechart2.js'
import  Sidebar1  from './Sidebar1.js'
import  Sidebar2  from './Sidebar2.js'
import  Multibar  from './Multibar.js'
const Charts = () => {
    return (
        <div className="flex justify-between mt-6">

            <div className=" ml-[8rem] border-r-2 border-gray-400 p-6">
                <h1 className="font-bold font-myfont text-5xl text-gray-700 text-center">Lives Saved</h1>
                <p className='text-center font-semibold text-6xl mt-3'>10,875</p>

                <Linechart1 />

            </div>
            <div className="ml-[2rem] p-3">
                <h1 className="font-bold font-myfont text-4xl text-gray-700 text-center">Avg Time to adopt</h1>
                <p className='font-bold text-4xl text-center mt-3'>45 Days</p>


                <p className='font-semibold font-myfont text-gray-500 text-center text-xl mt-6 mb-2'>Avg Time to Adapt by Age bucket</p>
                <Sidebar1 />
                <p className='text-gray-500 font-bold text-center'>Note:Starts at Date of Transport</p>
                <p className='font-semibold text-gray-500 text-center text-xl mt-3'>Avg Time to Adapt over Time</p>
                <Linechart2 />

            </div>
            <div className=" mr-[8rem] p-3  ml-[3rem]">
                <h1 className="font-bold font-myfont text-4xl text-gray-700 text-center ">Characteristics</h1>

                <p className='font-semibold font-myfont text-gray-500 text-left text-2xl mt-6'>Proportions of Dogs that ...</p>

                <Multibar />
               
                <p className='font-semibold font-myfont text-gray-500 text-left text-2xl mt-6'>Top 10 Primary Breeds(Including Mixes)</p>
                <Sidebar2 />
            </div>


        </div>
    )
}

export default Charts