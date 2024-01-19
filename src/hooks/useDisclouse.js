import { useState } from "react";

const useDisclouse = () => {

    const [isOpen,setOpeen]=useState(false);

  const onOpen=()=>{
    setOpeen(true);
  }
  const onClose=()=>{
    setOpeen(false);
  }
  return {onClose , onOpen , isOpen };
    
  
}

export default useDisclouse;
