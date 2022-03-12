import { TableCell, TableRow } from "@mui/material";
import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const Item = ({ item, handleEditCallback, handleDeleteCallback }) => {
  const handleEdit = (data) => {
    handleEditCallback(data);
  };

  const handleDelete = (data) => {
    handleDeleteCallback(data);
  };

  return (
    <TableRow>
      <TableCell>{item.first_name}</TableCell>
      <TableCell>{item.last_name}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.gender}</TableCell>
      <TableCell>{item.ip_address}</TableCell>
      <TableCell sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Edit item={item} handleEdit={handleEdit} />
        <Delete item={item} handleDelete={handleDelete} />
      </TableCell>
    </TableRow>
  );
};

export default Item;
