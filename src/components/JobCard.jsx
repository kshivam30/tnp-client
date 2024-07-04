import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Box, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BusinessIcon from '@mui/icons-material/Business';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  border: '1px solid #e0e0e0',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const RegularOfferBanner = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  borderTop: '1px solid #e0e0e0',
}));

const JobCard = ({
  companyName,
  CTC,
  DOA,
  eligibleAbove,
  Applied,
  logo,
  jobTitle,
  jobType,
  onRemove
}) => {
  const navigate = useNavigate();
  return (
    <StyledCard>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
            {logo ? (
              <img
                src={logo}
                alt={`${companyName} logo`}
                style={{ width: 50, height: 50, borderRadius: '50%' }}
              />
            ) : (
              <BusinessIcon style={{ fontSize: 50, color: '#e0e0e0' }} />
            )}
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6">{companyName}</Typography>
          </Grid>
        </Grid>
        <Typography variant="h5" component="div" sx={{ mt: 1 }}>
          {jobTitle}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <MonetizationOnIcon fontSize="small" color="primary" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {CTC}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <WorkIcon fontSize="small" color="primary" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {jobType}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <DateRangeIcon fontSize="small" color="primary" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {DOA}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Eligible Above: {eligibleAbove}
          </Typography>
        </Box>
        {onRemove ? (
          <RegularOfferBanner>
            <Button variant="contained" color="secondary" onClick={onRemove}>
              Remove
            </Button>
          </RegularOfferBanner>
        ) : (
          <RegularOfferBanner>
            <Button variant="contained" color="secondary" onClick={() => {
              navigate("/xyzjobportal")
            }}>
              Apply
            </Button>
          </RegularOfferBanner>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
