import React from "react";
import { toast, Zoom } from "react-toastify";
import Avatar from "../Avatar/Avatar";

interface Props {
  message: string;
}

const Toast: React.FC<Props> = ({ message }) => {
  toast(<ToastLayout message={message} />, {
    closeButton: false,
    hideProgressBar: true,
    position: "top-center",
    autoClose: 5000,
    transition: Zoom,
  });

  return null;
};

const ToastLayout: React.FC<Props> = ({ message }) => {
  return (
    <div className="w-full h-full flex items-center gap-3">
      <Avatar image="/s3.jpg" />
      <p className="text-[15px] font-semibold italic">{message}</p>
    </div>
  );
};

export default Toast;
