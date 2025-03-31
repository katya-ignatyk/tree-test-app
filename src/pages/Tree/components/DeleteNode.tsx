import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Button from "components/Button";
import Modal from "components/Modal";
import { useDeleteUserTreeNode } from "api/user/tree";
import { GetUserTreeResponse } from "api/user/tree/types";
import { TREE_NAME } from "lib/consts";
import useTreeContext from "../context/useTreeContext";

type DeleteNodeProps = {
  node: GetUserTreeResponse;
};

const DeleteNode = ({ node }: DeleteNodeProps) => {
  const { mutate } = useTreeContext();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { mutate: deleteUserTreeNode, loading } = useDeleteUserTreeNode({
    nodeId: node.id,
    treeName: TREE_NAME,
  });

  const openDeleteModal = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const onDeleteNode = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.stopPropagation();
      await deleteUserTreeNode();

      await mutate();
      closeDeleteModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={openDeleteModal}>
        <AiFillDelete className="text-xl" />
        Delete
      </Button>

      <Modal
        header={<div className="text-zinc-950 font-semi-bold">Delete</div>}
        footer={
          <div className="flex justify-end gap-2 w-full">
            <Button variant="primary" onClick={closeDeleteModal}>
              Cancel
            </Button>
            <Button variant="danger" loading={loading} onClick={onDeleteNode}>
              Delete
            </Button>
          </div>
        }
        onClose={closeDeleteModal}
        open={isDeleteModalOpen}
      >
        <div className="h-full flex flex-col items-center justify-center">
          Are you sure you want to delete {node.name}?
        </div>
      </Modal>
    </>
  );
};

export default DeleteNode;
