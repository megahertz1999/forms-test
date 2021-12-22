/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';
import formModel from './formModel';
const { firstName, lastName, age, address, zip, card, billingAddress, cvc, cost, amenity, amenityaddress1 } = formModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredMessage}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredMessage}`),
    [age.name]: Yup.number().required(`${age.requiredMessage}`),
    [address.name]: Yup.string(),
    [zip.name]: Yup.number().required(`${zip.requiredMessage}`),
  }),
  Yup.object().shape({
    [card.name]: Yup.string().required(`${card.requiredMessage}`),
    [billingAddress.name]: Yup.string().required(`${billingAddress.requiredMessage}`),
    [cvc.name]: Yup.number().required(`${cvc.requiredMessage}`),
    [cost.name]: Yup.number().required(`${cost.requiredMessage}`),
  }),
  Yup.object().shape({
    [amenity.name]: Yup.bool(),
    [amenityaddress1.name]: Yup.bool(),
  }),
];
