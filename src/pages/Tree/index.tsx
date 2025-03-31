import useTreeContext from "./context/useTreeContext";
import TreeItem from "./components/TreeItem";
import { NodeActions } from "./types";

const Tree = () => {
  const { data: tree } = useTreeContext();

  return <TreeItem node={tree} actions={NodeActions.Add} />;
};

export default Tree;
