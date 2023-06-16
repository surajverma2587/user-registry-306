import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const ConfirmationModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Success
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Successfully registered user.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" onClick={handleClose}>
              Ok
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};
