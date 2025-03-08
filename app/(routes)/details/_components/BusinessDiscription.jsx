import Image from 'next/image';
import React from 'react'

const BusinessDiscription = ({business}) => {
  return business?.name&&(
    <div>
        <h2 className='font-bold text-[25px] '>Description</h2>
        <p className='mt-4 text-lg text-gray-600'>{business?.about}</p>
        {/* <h3>
          {business?.description?.text}
        </h3> */}
       
        

        <h2 className='font-bold text-[25px] mt-8'>Gallary</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
            {business?.images?.map((item,index)=>(
                <Image src={item?.url} key={index} alt='name' width={700} height={200} className='rounded-lg'/>
            ))}
        </div>
    </div>
  )
}
//Export
export default BusinessDiscription;
