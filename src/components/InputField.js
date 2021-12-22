import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  return <TextField type="text" error={!!(meta.touched && meta.error)} helperText={meta.touched && meta.error} {...field} {...rest} />;
}
