"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/router"
import CustomButton from "./CustomButton"
import { updateSearchParams } from "@/utlis"

function ShowMore({pageNumber,isNext,setLimit}: ShowMoreProps) {
    
    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1)* 10;
        setLimit(newLimit)
      }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
                title="Show More"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handleNavigation}
                />
        )}
      
    </div>
  )
}

export default ShowMore
