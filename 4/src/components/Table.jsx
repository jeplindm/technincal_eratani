import React from "react";
import {
  Table as TableMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import Item from "./Item";

const Table = ({ list, handleDelete, handleEdit }) => {
  const handleEditCallback = (data) => {
    handleEdit(data);
  };

  const handleDeleteCallback = (data) => {
    handleDelete(data);
  };
  return (
    <TableContainer component={Paper}>
      <TableMUI>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>First name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Last name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Gender</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Ip Address</TableCell>
            <TableCell sx={{ fontWeight: 700 }}></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list?.map((item) => (
            <Item
              key={item.email}
              item={item}
              handleEditCallback={handleEditCallback}
              handleDeleteCallback={handleDeleteCallback}
            />
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
};

export default Table;
