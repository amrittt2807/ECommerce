import { createContext, useState } from "react";

export const ShowCartCard = createContext({
    
});
export const ShowCartCardProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const value = {showDropDown,setShowDropDown}
  return (
    <ShowCartCard.Provider value={value}>
      {children}
    </ShowCartCard.Provider>
  );
};
