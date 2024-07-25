import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Container, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import CompanyDetails from "./CompanyDetails";

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Company API end point
  const apiUrl = "http://127.0.0.1:8000/companies/";

  // function to fetch data of all the companies
  const fetchAllCompanies = async () => {
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error("500 Service Error");
      }
      const data = await res.json();
      setCompanies(data);
    } catch (error) {
      setError(error);
    } 
  };

  useEffect(() => {
    fetchAllCompanies();
  }, []);

  return (
    <>
        <h2>Companies</h2>
        <Container> 
            <List>
                {companies.map((company) => (
                <ListItem key={company.id}>
                    <Button onClick={() => navigate(`/${company.id}`)}>
                        <ListItemText primary={company.name} secondary={company.email} />
                    </Button>
                </ListItem>
                ))}
            </List>
        </Container>
    </>
  );
}
