import React from 'react'
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

export default function CompanyCard({name, address, lat, lng}) {
    const card = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              lat:{lat}, lng:{lng}
            </Typography>
            <Typography variant="body2">
              {address}
              
            </Typography>
          </CardContent>
          
        </React.Fragment>
      );
  return (
    <>
    <Card variant="outlined">{card}</Card>
    </>
  )
}
