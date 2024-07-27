import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import CompanyCard from "./CompanyCard";
import MapComponent from "./MapComponent";

export default function CompanyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState(null);

  const companyAPI_URL = `http://127.0.0.1:8000/companies/${id}/`

  const getCompanyById = async (id) =>{
    try {
      const res = await fetch(companyAPI_URL);
      if (!res.ok) {
        throw new Error('500 Service Error');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      const data = await getCompanyById(id);
      setCompanyDetails(data);
    };

    fetchCompanyDetails();
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
        style={{
          marginTop: "10px",
        }}
      >
        Back to Companies
      </Button>

      <Container>
        <Box mt={6} mb={4}>
          <Typography variant="h4" gutterBottom>
            {companyDetails?.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {companyDetails?.address}
          </Typography>
        </Box>
        {companyDetails? 
          <Box mb={4}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <MapComponent
                  locations={companyDetails?.locations}
                />
              </Grid>
            </Grid>
          </Box> : null
        }

        <Box mb={4}>
          <Typography variant="h6" style={{ fontSize: "24px" }}>
            All Locations
          </Typography>

          <Grid container spacing={2}>
            {companyDetails?.locations.map((location, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CompanyCard
                  name={location.name}
                  address={location.address}
                  lat={location.latitude}
                  lng={location.longitude}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
