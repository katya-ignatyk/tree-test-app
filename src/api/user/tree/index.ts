import useMutation from "../../useMutation";
import {
  CreateUserTreeNodeRequest,
  DeleteUserTreeNodeRequest,
  GetUserTreeRequest,
  GetUserTreeResponse,
  UpdateUserTreeNodeRequest,
} from "./types";

export const useGetUserTree = (params: GetUserTreeRequest) => {
  return useMutation<GetUserTreeResponse>({
    url: "/api.user.tree.get",
    method: "POST",
    params,
  });
};

export const useCreateUserTreeNode = (params: CreateUserTreeNodeRequest) => {
  return useMutation({
    url: "/api.user.tree.node.create",
    method: "POST",
    params,
  });
};

export const useUpdateUserTreeNode = (params: UpdateUserTreeNodeRequest) => {
  return useMutation({
    url: "/api.user.tree.node.rename",
    method: "POST",
    params,
  });
};

export const useDeleteUserTreeNode = (params: DeleteUserTreeNodeRequest) => {
  return useMutation({
    url: "/api.user.tree.node.delete",
    method: "POST",
    params,
  });
};
