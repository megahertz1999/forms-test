import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@mui/material';

import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo';
import StepThree from './forms/StepThree';

import validationSchema from './FormModel/validationSchema';
import formModel from './FormModel/formModel';
import formInitialValues from './FormModel/formInitialValues';

function MainForm() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === 2;
  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return <StepOne model={formModel} />;
      case 1:
        return <StepTwo model={formModel} />;
      case 2:
        return <StepThree model={formModel} />;
      default:
        return <div>Not Found</div>;
    }
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      console.log(values);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = (e) => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Formik initialValues={formInitialValues} validationSchema={currentValidationSchema} onSubmit={handleSubmit}>
        {(form) => (
          <Form style={{ padding: '17px' }}>
            {renderActiveStep(activeStep)}
            {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
            {<Button type="submit">{isLastStep ? 'Submit' : 'Next'}</Button>}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default MainForm;
