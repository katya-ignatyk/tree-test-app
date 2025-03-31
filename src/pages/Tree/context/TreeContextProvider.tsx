import { createContext, useEffect } from "react";
import { useGetUserTree } from "api/user/tree";
import { TREE_NAME } from "lib/consts";
import { TreeContextDeps, TreeContextProviderProps } from "./types";

const TreeContext = createContext<TreeContextDeps | null>(null);

const TreeContextProvider = ({ children }: TreeContextProviderProps) => {
  const { mutate, loading, error, data } = useGetUserTree({
    treeName: TREE_NAME,
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <TreeContext.Provider value={{ data, mutate, loading, error }}>
      {children}
    </TreeContext.Provider>
  );
};

export { TreeContextProvider, TreeContext };
