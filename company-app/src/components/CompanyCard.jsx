import React from 'react'
import { Typography, Card, CardContent,} from '@mui/material';

// card component to display the details of the company for a particular address
export default function CompanyCard({name, address, lat, lng, onClick}) {
    const card = (
        <React.Fragment>
          <CardContent onClick={onClick}>
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
    <Card sx={{margin:'2%'}}variant="outlined">{card}</Card>
    </>
  )
}
