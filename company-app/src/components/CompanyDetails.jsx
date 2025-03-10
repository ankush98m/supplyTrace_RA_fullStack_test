import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Box, Button, Divider } from "@mui/material";
import CompanyCard from "./CompanyCard";
import MapComponent from "./MapComponent";

export default function CompanyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);

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
      if (data?.locations?.length > 0) {
        setMapCenter([data.locations[0].latitude, data.locations[0].longitude]);
      }
    };

    fetchCompanyDetails();
  }, [id]);

  // function to naviagte to list of companies
  const handleBack = () => {
    navigate("/");
  };

  const handleCardClick = (latitude, longitude) => {
    setMapCenter([latitude, longitude]);
    
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
      {companyDetails? 
      <Container>
      
        <Box mt={6} mb={4}>
          <Typography variant="h4" gutterBottom>
            {companyDetails?.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {companyDetails?.address}
          </Typography>
        </Box>

        <Divider sx={{
          marginTop: '-20px',
          marginBottom: '10px',
          border: '2px solid black'
          }} />
        
        {companyDetails.locations.length > 0 ? (
          <>
          <Box mb={4}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <MapComponent
                  locations={companyDetails?.locations}
                  center={mapCenter}
                />
              </Grid>
            </Grid>
          </Box> 
        
        
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
                  onClick={() => handleCardClick(location.latitude, location.longitude)}
                />
              </Grid>
            ))} 
          </Grid>
        </Box> 
        </>) :
        (
          <Typography variant="h6" color="textSecondary">
            No locations available for this company.
          </Typography>
        )}
        
      
      </Container> : <h5>There are no details to display</h5>
  }
    </>
  );
}
