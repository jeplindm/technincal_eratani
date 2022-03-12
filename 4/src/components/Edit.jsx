import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { ModeEdit } from "@mui/icons-material";

const Edit = ({ item, handleEdit }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    email: item.email,
    gender: item.gender,
    ip_address: item.ip_address,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEdit(form);
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)} color="success">
        <ModeEdit />
      </IconButton>

      <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>Edit</DialogTitle>

          <DialogContent>
            <TextField
              required
              onChange={handleChange}
              name="first_name"
              fullWidth
              margin="dense"
              label="First name"
              value={form.first_name}
            />
            <TextField
              required
              onChange={handleChange}
              name="last_name"
              margin="dense"
              fullWidth
              label="Last name"
              value={form.last_name}
            />
            <TextField
              required
              onChange={handleChange}
              name="email"
              margin="dense"
              fullWidth
              label="Email"
              value={form.email}
              type="email"
            />
            <TextField
              required
              margin="dense"
              name="gender"
              onChange={handleChange}
              value={form.gender}
              select
              fullWidth
              SelectProps={{ native: true }}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </TextField>
            <TextField
              required
              onChange={handleChange}
              name="ip_address"
              margin="dense"
              fullWidth
              label="Ip address"
              value={form.ip_address}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="error" variant="outlined" fullWidth>
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Save Changes
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Edit;
