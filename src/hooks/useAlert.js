import { useCallback, useState } from "react";

const useAlert = (handleSomething, payloadForMethod) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const handleConfirmClose = useCallback(() => {
    setOpen(false);
    handleSomething(payloadForMethod);
  }, [handleSomething, payloadForMethod]);
  return { open, handleOpen, handleClose, handleConfirmClose };
};
export default useAlert;
