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

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box sx={{ width: '100%' , color : "orange" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step sx={{color : "red"}} key={label}>
            <StepLabel style={{ color:  'orange' }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
