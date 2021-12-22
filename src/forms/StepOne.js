import * as React from 'react';
import Box from '@mui/material/Box';
import InputField from '../components/InputField';
import { useFormikContext } from 'formik';

export default function StepOne({ model }) {
  const { firstName, lastName, age, address, zip } = model;
  const { errors } = useFormikContext();
  console.log(errors);
  return (
    <Box>
      <InputField label={firstName.label} name={firstName.name} />
      <InputField label={lastName.label} name={lastName.name} />
      <InputField label={age.label} name={age.name} type="number" />
      <InputField label={address.label} name={address.name} />
      <InputField label={zip.label} name={zip.name} type="number" />
    </Box>
  );
}
