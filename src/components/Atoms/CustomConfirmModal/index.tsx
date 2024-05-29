import React from "react";
import Modal, { Props } from "react-modal";

interface CustomConfirmModalProps extends Props {
  children: React.ReactNode;
}

export const CustomConfirmModal = ({
  children,
  ...rest
}: CustomConfirmModalProps) => {
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
          zIndex: 999,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          // border: "1px solid #ccc",
          // background: "#fff",
          top: "40%",
          left: "50%",
          translate: "-50% -50%",
          // overflow: "auto",
          position: "absolute",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          width: "fit-content",
          height: "fit-content",
          // margin: "20px auto 0",
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingTop: 0,
        },
      }}
    >
      {children}
    </Modal>
  );
};
