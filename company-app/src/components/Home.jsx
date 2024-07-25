import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Container, Button, TextField, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Company API endpoint
  const apiUrl = "http://127.0.0.1:8000/companies/";

  // Function to fetch data of all the companies
  const fetchAllCompanies = async () => {
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error("500 Service Error");
      }
      const data = await res.json();
      setCompanies(data);
      setFilteredCompanies(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchAllCompanies();
  }, []);

  useEffect(() => {
    setFilteredCompanies(
      companies.filter(company =>
        company.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, companies]);

  return (
    <>
      <Container>
      <Box mb={2} mt={4}>
          <TextField
            label="Search Companies"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <h2 style={{fontSize: '32px'}}>COMPANIES</h2>
        <List>
          {filteredCompanies.map((company) => (
            <ListItem key={company.id} onClick={() => navigate(`/${company.id}`)}>
              <ListItemText primary={company.name} secondary={company.address} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
