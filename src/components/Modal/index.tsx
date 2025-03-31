import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

type ModalProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
} & React.ComponentPropsWithoutRef<"dialog">;

const Modal = ({
  children,
  header,
  footer,
  onClose,
  open,
  ...props
}: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800/50 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <dialog
        className="border-1 backdrop:bg-white- bg-white rounded-lg shadow-lg w-[400px] max-w-[90%] relative"
        open={open}
        {...props}
      >
        {header && (
          <div className="flex justify-between items-center py-7 px-10 border-b-1 border-gray-300">
            {header}
            <Button onClick={onClose} variant="default">
              <AiOutlineClose className="text-sm text-gray-800" />
            </Button>
          </div>
        )}
        <div className="py-7 px-10 min-h-50">{children}</div>
        {footer && (
          <div
            onClick={onClose}
            className="flex justify-between py-7 px-10 border-t-1 border-gray-300"
          >
            {footer}
          </div>
        )}
      </dialog>
    </div>
  );
};

export default Modal;
