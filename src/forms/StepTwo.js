import * as React from 'react';
import Box from '@mui/material/Box';
import { useFormikContext } from 'formik';
import InputField from '../components/InputField';

export default function StepTwo({ model }) {
  const { card, billingAddress, cvc, cost } = model;
  const { errors } = useFormikContext();
  console.log(errors);
  return (
    <Box>
      <InputField label={card.label} name={card.name} />
      <InputField label={billingAddress.label} name={billingAddress.name} />
      <InputField label={cvc.label} name={cvc.name} type="number" />
      <InputField label={cost.label} name={cost.name} type="number" />
    </Box>
  );
}
