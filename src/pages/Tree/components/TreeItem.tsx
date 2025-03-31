import React from "react";
import Collapse from "components/Collapse";
import { GetUserTreeResponse } from "api/user/tree/types";
import { NodeActions } from "../types";
import AddNode from "./AddNode";
import RenameNode from "./RenameNode";

type TreeItemProps = {
  node: GetUserTreeResponse | null;
  actions: NodeActions | NodeActions[];
};

const TreeItem = React.memo(({ node, actions }: TreeItemProps) => {
  if (!node) {
    return null;
  }

  const actionsArray = Array.isArray(actions) ? actions : [actions];
  const hasChildren = node.children.length > 0;

  return (
    <div className="flex items-center py-3 px-7">
      <Collapse
        title={
          <div className="flex gap-5 items-center">
            <span className="text-white select-none">{node.name}</span>
            <div className="flex gap-2">
              {actionsArray.includes(NodeActions.Add) && (
                <AddNode node={node} />
              )}
              {actionsArray.includes(NodeActions.Rename) && (
                <RenameNode node={node} />
              )}
            </div>
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
