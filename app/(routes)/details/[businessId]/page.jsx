'use client'
import GlobalApi from '@/app/_services/GlobalApi'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import BusinessDiscription from '../_components/BusinessDiscription';
import SuggestedBusiness from '../_components/SuggestedBusiness';

const BusinessDetail = ({params}) => {

  const [businessDetail, setBusinessDetail] = useState([]);

  useEffect(()=>{
    params&&getBusinessbyId();
  },[params]);

  const getBusinessbyId = ()=>{
    GlobalApi.getBusinessById(params.businessId).then(resp=>{
      // console.log(resp);
      setBusinessDetail(resp.businessList);
      // console.log(businessDetail);
    })
  }

  return (
    <div className='py-8 md:py-20 px-10 md:px-36'>
      <BusinessInfo business={businessDetail}/>
      <div className='grid grid-cols-3 mt-16'>
        <div className='md:col-span-2 col-span-3 order-last md:order-first'>
        <BusinessDiscription business={businessDetail}/>
        </div>
        <div>
          <SuggestedBusiness business={businessDetail}/>

        </div>
      </div>
      
    </div>
  )
}

// Export 
export default BusinessDetail;
