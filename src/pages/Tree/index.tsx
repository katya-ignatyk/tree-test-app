import useTreeContext from "./context/useTreeContext";
import TreeItem from "./components/TreeItem";
import { NodeActions } from "./types";
import Skeleton from "./components/Skeleton";

const Tree = () => {
  const { data: tree, loading } = useTreeContext();

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="max-w-full">
      <TreeItem node={tree} actions={NodeActions.Add} />
    </div>
  );
};

export default Tree;
