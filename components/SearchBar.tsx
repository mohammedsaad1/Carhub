"use client";

import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";
const SearchButton = ({otherClasses}:{otherClasses:string}) =>(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="maginfying glass"
      width={40}
      height={40}
      className="object-contain"/>
  </button>
)

const SearchBar = ({setManufacturer,setModel}) => {
    const [searchManufacturer, setSearchManufacturer]=useState('')
    const [searchModel,setSearchModel]=useState('')
    const router= useRouter()
    const handleSearch =(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if (searchManufacturer ==='' && searchModel ===''){
        return alert('please fill in the search bar ')
      }

       setModel(searchModel)
      setManufacturer(searchManufacturer)  
    }
    const updateSearchParams = (searchModel: string,searchManufacturer:string)=>{
      const searchParams = new URLSearchParams(window.location.search);
      if (searchModel){
        searchParams.set('searchModel',searchModel)
      } else {
        searchParams.delete('searchModel')
      }
      if (searchManufacturer) {
        searchParams.set('searchManufacturer',searchManufacturer)
      }else{
        searchParams.delete('searchManufacturer')
      }
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`
      
      router.push(newPathname)
    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
        
            <SearchManufacturer
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}/>
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
           <Image
              src="/searchModel-icon.png"
              width={25}
              height={25}
              className="absolute w-[20px] ml-4"
              alt="car searchModel"/> 
              <input 
                type="text"
                name="searchModel"
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                placeholder="Tiguan"
                className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hideen"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar
