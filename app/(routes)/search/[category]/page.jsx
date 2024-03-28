'use client'
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react'

const BusinessByCategory = ({params}) => {

  const [businessList, setBusinessList] = useState([]);

  useEffect(()=>{
    // console.log(params);
    params&&getBusinessList();
  },[params]);

  const getBusinessList =()=>{
    GlobalApi.getBusinessByCategory(params.category).then(resp=>{
      // console.log(resp);
      setBusinessList(resp?.businessLists);
    })
  }
  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} seeAll={false} limit={false}/>
    </div>
  )
}

export default BusinessByCategory;