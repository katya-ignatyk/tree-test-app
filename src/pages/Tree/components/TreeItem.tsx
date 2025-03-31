import React from "react";
import Collapse from "components/Collapse";
import { GetUserTreeResponse } from "api/user/tree/types";
import { NodeActions } from "../types";

type TreeItemProps = {
  node: GetUserTreeResponse | null;
  actions: NodeActions | NodeActions[];
};

const TreeItem = React.memo(({ node }: TreeItemProps) => {
  if (!node) {
    return null;
  }

  const hasChildren = node.children.length > 0;

  return (
    <div className="flex items-center py-3 px-7">
      <Collapse
        title={
          <div className="flex gap-5 items-center">
            <span className="text-white select-none">{node.name}</span>
          </div>
        }
        showIcon={hasChildren}
      >
        {hasChildren &&
          node.children.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              actions={[
                NodeActions.Add,
                NodeActions.Delete,
                NodeActions.Rename,
              ]}
            />
          ))}
      </Collapse>
    </div>
  );
});

export default TreeItem;
