/* eslint-disable import/no-anonymous-default-export */
import formModel from './formModel';
const { firstName, lastName, age, address, zip, card, billingAddress, cvc, cost, amenity, amenityaddress1 } = formModel;

export default {
  [firstName.name]: '',
  [lastName.name]: 'byubyuyu',
  [age.name]: '',
  [address.name]: '',
  [zip.name]: '',
  [card.name]: '',
  [billingAddress.name]: '',
  [cvc.name]: '',
  [cost.name]: '',
  [amenity.name]: false,
  [amenityaddress1.name]: false,
};
