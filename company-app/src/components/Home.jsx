import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Container } from "@mui/material";

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock API url
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

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

    fetchAllCompanies();
  }, []);

  return (
    <>
        <h2>Companies</h2>
        <Container>
            <List>
                {companies.map((company) => (
                <ListItem key={company.id}>
                    <ListItemText primary={company.name} secondary={company.email} />
                </ListItem>
                ))}
            </List>
        </Container>
    </>
  );
}
