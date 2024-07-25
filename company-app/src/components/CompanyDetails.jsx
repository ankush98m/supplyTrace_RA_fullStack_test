import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CompanyCard from './CompanyCard';

export default function CompanyDetails() {

  // Mock data
  const [company, setCompany] = useState({
    name: 'Example Company',
    address: '123 Example Street',
    mainLocation: { lat: 40.7128, lng: -74.0060 },
    locations: [
      { name: 'Location 1', address: '456 Another St', lat: 40.7128, lng: -73.0060 },
      { name: 'Location 2', address: '789 Another St', lat: 41.7128, lng: -72.0060 },
      { name: 'Location 3', address: '789 Another St', lat: 41.7128, lng: -72.0060 },
    ]
  });

    const { id } = useParams();
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {company.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {company.address}
      </Typography>
      <h6 style={{fontSize: '24px'}}>Other Locations</h6>
      <Grid container spacing={2}>
        
          {company.locations.map((c,i)=>{
            return(
              <Grid spacing={2} xs={12} sm={6} md={6} lg={4}>
                <CompanyCard name={c.name} address={c.address} lat={c.lat} lng={c.lng}/>
              </Grid>
            )
            })}
      </Grid>
    </Container>
  )
}
