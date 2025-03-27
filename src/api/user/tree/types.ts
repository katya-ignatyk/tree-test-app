export type GetUserTreeResponse = {
  id: string;
  name: string;
  children: GetUserTreeResponse[];
};

export type GetUserTreeRequest = {
  treeName: string;
};

export type CreateUserTreeNodeRequest = {
  treeName: string;
  parentNodeId: string;
  nodeName: string;
};

export type DeleteUserTreeNodeRequest = {
  treeName: string;
  nodeId: string;
};

export type UpdateUserTreeNodeRequest = {
  treeName: string;
  nodeId: string;
  newNodeName: string;
};
