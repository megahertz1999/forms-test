import * as React from 'react';
import { Box } from '@mui/material';
import { Field, useFormikContext } from 'formik';
export default function StepThree({ model }) {
  const { amenity, amenityaddress1 } = model;
  const { values: formValues } = useFormikContext();
  return (
    <Box>
      <Field type="checkbox" label={amenity.label} name={amenity.name} /> <label>Amenity</label>
      <br />
      {formValues.age > 90 && (
        <>
          {' '}
          <Field type="checkbox" label={amenityaddress1.label} name={amenityaddress1.name} /> <label>Amenity Address 1</label>
        </>
      )}
    </Box>
  );
}
