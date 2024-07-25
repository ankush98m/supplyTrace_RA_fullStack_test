import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import CompanyCard from "./CompanyCard";
import MapComponent from "./MapComponent";

export default function CompanyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data
  const [company, setCompany] = useState({
    name: "Example Company",
    address: "123 Example Street",
    mainLocation: { lat: 40.7128, lng: -74.006 },
    locations: [
      {
        name: "Location 1",
        address: "456 Another St",
        lat: 40.7128,
        lng: -73.006,
      },
      {
        name: "Location 2",
        address: "789 Another St",
        lat: 41.7128,
        lng: -72.006,
      },
      {
        name: "Location 3",
        address: "221 Another St",
        lat: 41.7128,
        lng: -72.006,
      },
    ],
  });

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
            {company.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {company.address}
          </Typography>
        </Box>

        <Box mb={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <MapComponent
                mainLocation={company.mainLocation}
                locations={company.locations}
                name={company.name}
              />
            </Grid>
          </Grid>
        </Box>

        <Box mb={4}>
          <Typography variant="h6" style={{ fontSize: "24px" }}>
            Other Locations
          </Typography>

          <Grid container spacing={2}>
            {company.locations.map((location, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CompanyCard
                  name={location.name}
                  address={location.address}
                  lat={location.lat}
                  lng={location.lng}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
