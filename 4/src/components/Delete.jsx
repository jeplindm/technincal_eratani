import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const Delete = ({ item, handleDelete }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleDelete(item);
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)} color="error">
        <DeleteOutline />
      </IconButton>

      <Dialog maxWidth="sm" fullWidth onClose={handleClose} open={open}>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>Are you sure want to delete this user?</DialogTitle>
          <DialogActions>
            <Button type="submit" fullWidth variant="contained" color="error">
              Yes, delete it!
            </Button>
            <Button onClick={handleClose} fullWidth color="error">
              Cancel
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Delete;
