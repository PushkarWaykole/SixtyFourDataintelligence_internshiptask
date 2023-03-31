import React from 'react'
import dogs from '../Images/dogs.PNG'
const Information = () => {
    return (
        <div className=" flex justify-around">

            <div className="m-4 ml-[-10px] mt-6">

                <p className="text-5xl font-semibold font-oswald ">Last of Hope K9</p>
                <p className='font-light text-3xl mt-4'>Where a last hope<br /> becomes a <span className="underline underline-offset-8 decoration-red-500 decoration-4">new beginning </span>.</p>

            </div>

            {/* images */}


            <div>
                <div >
                    <img className='mr-8' src={dogs} alt="dogs" />
                </div>
            </div>


        </div>
    )
}

export default Information