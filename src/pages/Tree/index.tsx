import useTreeContext from "./context/useTreeContext";
import TreeItem from "./components/TreeItem";
import { NodeActions } from "./types";

const Tree = () => {
  const { data: tree } = useTreeContext();

  return (
    <div className="max-w-full">
      <TreeItem node={tree} actions={NodeActions.Add} />
    </div>
  );
};

export default Tree;
