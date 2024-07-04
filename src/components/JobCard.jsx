import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Box, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BusinessIcon from '@mui/icons-material/Business';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  border: '1px solid #e0e0e0',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const StatusButton = styled(Button)(({ theme, applied }) => ({
  backgroundColor: applied ? theme.palette.primary.main : theme.palette.error.main,
  color:  theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 1),
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover': {
    backgroundColor: "white",
    color: applied? '#1976d2': "red", // Light blue color on hover
  },
}));

const RegularOfferBanner = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFEB3B',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderTop: '1px solid #e0e0e0',
}));

const JobCard = ({
  jobTitle,
  companyName,
  logoUrl,
  location,
  jobType,
  role,
  salary,
  roundDate,
  applied,
}) => {
  const [isApplied, setIsApplied] = useState(applied);

  const handleToggleApply = () => {
    setIsApplied(!isApplied);
  };

  return (
    <StyledCard>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={`${companyName} logo`}
                style={{ width: 50, height: 50, borderRadius: '50%' }}
              />
            ) : (
              <BusinessIcon style={{ fontSize: 50, color: '#e0e0e0' }} />
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{companyName}</Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center">
            <StatusButton sx={{ }} applied={isApplied} onClick={handleToggleApply} fullWidth>
              {isApplied ? 'Applied' : 'Not Applied'}
            </StatusButton>
          </Grid>
        </Grid>
        <Typography variant="h5" component="div" sx={{ mt: 1 }}>
          {jobTitle}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <LocationOnIcon fontSize="small" color="primary" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {location}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <WorkIcon fontSize="small" color="primary" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {jobType}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MonetizationOnIcon fontSize="small" color="primary" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {salary}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DateRangeIcon fontSize="small" color="primary" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {roundDate || '--'}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <RegularOfferBanner>
        <Typography variant="body2">Regular offer</Typography>
      </RegularOfferBanner>
    </StyledCard>
  );
};

export default JobCard;
