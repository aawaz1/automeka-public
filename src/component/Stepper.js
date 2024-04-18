import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'ORDER CONFIRMED',
  'SHIPPED',
  'DELIVERED',
];

export default function HorizontalLinearAlternativeLabelStepper({tracker}) {
  return (
    <Box sx={{ width: '100%' , color : "orange" }}>
      <Stepper activeStep={1} alternativeLabel>
       
          <Step sx={{color : "red"}} key={tracker}>
            <StepLabel style={{ color:  'orange' }}>{tracker}</StepLabel>
          </Step>
       
      </Stepper>
    </Box>
  );
}
