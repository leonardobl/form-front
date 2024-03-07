import React from "react";
import Modal, { Props } from "react-modal";

interface IMyModalProps extends Props {
  children: React.ReactNode;
}

export const MyModal = ({ children, ...rest }: IMyModalProps) => {
  return (
    <Modal
      {...rest}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          // border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          width: "fit-content",
          height: "fit-content",
          margin: "60px auto 0",
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingTop: 0,
          position: "relative",
          left: 0,
        },
      }}
    >
      {children}
    </Modal>
  );
};
