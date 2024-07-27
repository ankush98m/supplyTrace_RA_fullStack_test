import React from 'react'
import { ArrowForward } from '@mui/icons-material';
import {Card, CardContent, Typography, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// card component to display company in a list
export default function CompanyListCard({company}) {
    const {id, name, address} = company;
    const navigate = useNavigate();

  return (
    <>
    <Card sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {address}
                </Typography>
              </CardContent>
              <IconButton
                edge="end"
                aria-label="navigate"
                onClick={() => navigate(`/${id}`)}
                sx={{ position: 'absolute', right: 35, top: 16 }}
              >
                <ArrowForward />
              </IconButton>
            </Card>
    </>
  )
}
