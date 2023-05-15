import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
// Icon
import { AiOutlineUser } from "react-icons/ai";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Auth() {
  const [openModalAuth, setOpenModalAuth] = useState(false);

  const [switchAuth, setSwitchAuth] = useState(true)

  const handleOpen = () => setOpenModalAuth(true);
  const handleClose = () => setOpenModalAuth(false);

  return (
    <div>
      <Button onClick={handleOpen}><AiOutlineUser size={30} /></Button>
      <Modal
        open={openModalAuth}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {switchAuth ? (
            <Login
              openModalAuth={openModalAuth}
              setOpenModalAuth={setOpenModalAuth}
              setSwitchAuth={setSwitchAuth}
              switchAuth={switchAuth}
            />
          ) : (
            <Register
              openModalAuth={openModalAuth}
              setOpenModalAuth={setOpenModalAuth}
              setSwitchAuth={setSwitchAuth}
              switchAuth={switchAuth}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
