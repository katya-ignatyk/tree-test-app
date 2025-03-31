import { useContext } from "react";
import { TreeContext } from "./TreeContextProvider";

const useTreeContext = () => {
  const context = useContext(TreeContext);

  if (context === null) {
    throw new Error("useTreeContext must be used within a TreeContextProvider");
  }

  return context;
};

export default useTreeContext;
