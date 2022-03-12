import React, { useEffect, useState } from "react";
import data from "./data/MOCK_DATA.json";
import { Box, TextField, Grid, Button } from "@mui/material";
import { v4 as uuidV4 } from "uuid";
import Table from "./components/Table";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) setList(data);
  }, []);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  });

  const [query, setQuery] = useState("");

  const search = (itemList) => {
    const keys = ["first_name", "last_name", "email", "gender", "ip_address"];
    return itemList.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const payload = {
      id: uuidV4(),
      ...form,
    };

    setList([payload, ...list]);
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "",
    });
  };

  const handleEdit = (data) => {
    const listOfItems = [...list];
    const findIndex = listOfItems.findIndex(
      (item) => item.id.toString() === data.id.toString()
    );

    listOfItems[findIndex] = data;

    setList(listOfItems);
  };

  const handleDelete = (data) => {
    const filtered = list.filter((item) => item.id.toString() !== data.id.toString());
    setList(filtered);
  };

  return (
    <Box sx={{ px: 8 }}>
      <Grid onSubmit={handleCreate} container component="form" spacing={2} sx={{ my: 4 }}>
        <Grid item xs={2}>
          <TextField
            required
            name="first_name"
            onChange={handleChange}
            value={form.first_name}
            size="small"
            placeholder="First name"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            required
            name="last_name"
            onChange={handleChange}
            value={form.last_name}
            size="small"
            placeholder="Last name"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            required
            name="email"
            onChange={handleChange}
            value={form.email}
            size="small"
            placeholder="Email"
            type="email"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            required
            name="gender"
            onChange={handleChange}
            value={form.gender}
            size="small"
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
        </Grid>
        <Grid item xs={2}>
          <TextField
            required
            name="ip_address"
            onChange={handleChange}
            value={form.ip_address}
            size="small"
            placeholder="Ip Address"
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" fullWidth variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>

      <Box component="form" sx={{ mb: 4, display: "flex", alignItems: "center" }}>
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="search"
          placeholder="Search..."
          fullWidth
          size="small"
          sx={{ mr: 2 }}
        />
      </Box>

      <Table list={search(list)} handleDelete={handleDelete} handleEdit={handleEdit} />
    </Box>
  );
};

export default App;
