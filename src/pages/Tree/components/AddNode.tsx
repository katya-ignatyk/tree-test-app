import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GetUserTreeResponse } from "api/user/tree/types";
import { TREE_NAME } from "lib/consts";
import Modal from "components/Modal";
import useTreeContext from "../context/useTreeContext";
import { useCreateUserTreeNode } from "api/user/tree";
import Button from "components/Button";

type AddNodeProps = {
  node: GetUserTreeResponse;
};

const AddNode = ({ node }: AddNodeProps) => {
  const { mutate } = useTreeContext();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const { mutate: createUserTreeNode, loading } = useCreateUserTreeNode({
    parentNodeId: node.id,
    nodeName: inputValue,
    treeName: TREE_NAME,
  });

  const openAddModal = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const onAddNode = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.stopPropagation();

      await createUserTreeNode();
      await mutate();

      closeAddModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={openAddModal}>
        <AiOutlinePlus className="text-[clamp(10px,2vw,14px)] text-gray-100" />
      </Button>
      <Modal
        header={<div className="text-zinc-950 font-semi-bold">Add node</div>}
        footer={
          <div className="flex justify-end gap-2 w-full">
            <Button variant="primary" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button variant="primary" loading={loading} onClick={onAddNode}>
              Add
            </Button>
          </div>
        }
        onClose={closeAddModal}
        open={isAddModalOpen}
      >
        <div className="h-full flex flex-col items-center justify-center gap-5">
          <label className="mr-auto">New Node name:</label>
          <input
            type="text"
            value={inputValue}
            placeholder="Node Name"
            className="border-1 border-gray-300 rounded-lg p-4 w-full"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};

export default AddNode;
