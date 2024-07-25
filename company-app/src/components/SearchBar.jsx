import React from 'react';
import { TextField, Box } from '@mui/material';

export default function SearchBar({ search, setSearch }) {
  return (
    <Box mb={2}>
      <TextField
        label="Search Companies"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}
