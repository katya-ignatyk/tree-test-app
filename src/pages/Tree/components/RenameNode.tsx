import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import Modal from "components/Modal";
import Button from "components/Button";
import { useUpdateUserTreeNode } from "api/user/tree";
import { GetUserTreeResponse } from "api/user/tree/types";
import { TREE_NAME } from "lib/consts";
import useTreeContext from "../context/useTreeContext";

type RenameNodeProps = {
  node: GetUserTreeResponse;
};

const RenameNode = ({ node }: RenameNodeProps) => {
  const { mutate } = useTreeContext();
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const { mutate: updateUserTreeNode, loading } = useUpdateUserTreeNode({
    newNodeName: inputValue ?? "",
    treeName: TREE_NAME,
    nodeId: node.id,
  });

  const openRenameModal = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsRenameModalOpen(true);
  };

  const closeRenameModal = () => {
    setIsRenameModalOpen(false);
  };

  const onRenameNode = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.stopPropagation();

      await updateUserTreeNode();
      await mutate();

      closeRenameModal();
    } catch (error) {
      console.log(error);
    }
  };

  if (inputValue === undefined) {
    setInputValue(node.name);
  }

  return (
    <>
      <Button onClick={openRenameModal} variant="default">
        <AiFillEdit className="text-xl" />
        Rename
      </Button>
      <Modal
        header={<div className="text-zinc-950 font-semi-bold">Rename</div>}
        footer={
          <div className="flex justify-end gap-2 w-full">
            <Button variant="primary" onClick={closeRenameModal}>
              Cancel
            </Button>
            <Button variant="primary" loading={loading} onClick={onRenameNode}>
              Save changes
            </Button>
          </div>
        }
        onClose={closeRenameModal}
        open={isRenameModalOpen}
      >
        <div className="h-full flex flex-col items-center justify-center gap-5">
          <label className="mr-auto">New Node name:</label>
          <input
            type="text"
            value={inputValue}
            placeholder="Node name"
            className="border-1 border-gray-300 rounded-lg p-4 w-full"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};

export default RenameNode;
