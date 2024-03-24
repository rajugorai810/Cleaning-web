"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "../_components/Header";
import Hero from "../_components/Hero";
import CategoryList from "../_components/CategoryList";
import GlobalApi from "../_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "../_components/BusinessList";
// import { UserButton } from "@clerk/nextjs";


export default function Home() {

  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]); 

  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();
  },[]);

  // Get the category list
const getCategoryList=()=>{
  GlobalApi.getCategory().then(resp=>{
    // console.log(resp.categories);
    setCategoryList(resp?.categories);
  })
}

//Get all business List

const getAllBusinessList = ()=>{
  GlobalApi.getAllBusinessList().then(resp=>{
    // console.log(resp.businessLists);
    setBusinessList(resp.businessLists);
  })
}


  return (
    <div>
      {/* <Header/> */}
      
      <Hero/>

      <CategoryList categoryList={categoryList}/>
      <BusinessList businessList={businessList} title={"Popular Businesses"}/>
    </div>
  );
}
