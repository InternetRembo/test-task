import { isValidData, isValidEmail, isValidNum, isValidUppercase } from '../../helpers/validators';

export const shippingValidate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Please  enter your name';
  } else if (values.name.length < 4 || values.name.length > 17) {
    errors.name = 'Invalid name length';
  } else if (!isValidData(values.name)) {
    errors.name = 'The name can only consist of letters';
  }

  if (!values.phone) {
    errors.phone = 'Please enter your phone number';
  } else if (!isValidNum(values.phone)) {
    errors.phone = 'Invalid phone number';
  } else if (values.phone.length !== 10) {
    errors.phone = 'The phone number must consist of 10 digits';
  }

  if (!values.street) {
    errors.street = 'Please enter your street address';
  } else if (!isValidData(values.street)) {
    errors.street = 'Invalid street address';
  } else if (values.street.length < 5 || values.street.length > 16) {
    errors.street = 'Invalid street length';
  }

  if (!values.city) {
    errors.city = 'Please enter city';
  } else if (!isValidData(values.city)) {
    errors.city = 'Invalid city name';
  } else if (values.city.length < 3 || values.city.length > 18) {
    errors.city = 'Invalid city length';
  }

  if (!values.country) {
    errors.country = 'Please enter country';
  }

  if (!values.zip) {
    errors.zip = 'Please enter ZIP code';
  } else if (!isValidNum(values.zip)) {
    errors.zip = 'Invalid ZIP code';
  } else if (values.zip.length !== 5) {
    errors.zip = 'ZIP code consist of 5 digits';
  }

  return errors;
};

export const billingValidate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Please  enter your name';
  } else if (values.name.length < 4 || values.name.length > 17) {
    errors.name = 'Invalid name length';
  } else if (!isValidData(values.name)) {
    errors.name = 'The name can only consist of letters';
  }

  if (!values.street) {
    errors.street = 'Please enter your street address';
  } else if (!isValidData(values.street)) {
    errors.street = 'Invalid street address';
  } else if (values.street.length < 5 || values.street.length > 16) {
    errors.street = 'Invalid street length';
  }

  if (!values.city) {
    errors.city = 'Please enter city';
  } else if (!isValidData(values.city)) {
    errors.city = 'Invalid city name';
  } else if (values.city.length < 3 || values.city.length > 18) {
    errors.city = 'Invalid city length';
  }

  if (!values.country) {
    errors.country = 'Please enter country';
  }

  if (!values.zip) {
    errors.zip = 'Please enter ZIP code';
  } else if (!isValidNum(values.zip)) {
    errors.zip = 'Invalid ZIP code';
  } else if (values.zip.length !== 5) {
    errors.zip = 'ZIP code consist of 5 digits';
  }

  if (!values.email) {
    errors.email = 'Please enter email';
  } else if (values.email.length < 5) {
    errors.email = 'Invalid email length';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid email format';
  }
  return errors;
};

export const paymentValidate = (values) => {
  let errors = {};

  if (!values.cardholderName) {
    errors.cardholderName = 'Please enter cardholder Name';
  } else if (!isValidUppercase(values.cardholderName)) {
    errors.cardholderName = 'Enter cardholder name in capital letters ';
  } else if (values.cardholderName.length < 5 || values.cardholderName.length > 30) {
    errors.cardholderName = 'Invalid cardholder name length ';
  }

  if (!values.cardNumber) {
    errors.cardNumber = 'Please enter your card number';
  } else if (!isValidNum(values.cardNumber)) {
    errors.cardNumber = 'Invalid card number';
  } else if (values.cardNumber.length !== 16) {
    errors.cardNumber = 'Card number must consist of 16 digits';
  }

  if (!values.expireDate) {
    errors.expireDate = 'Please enter expiration date of card';
  } else if (!isValidNum(values.expireDate)) {
    errors.expireDate = 'Invalid  expire date';
  } else if (values.expireDate.length !== 4) {
    errors.expireDate = 'Expire date must consist of 4 digits';
  }

  if (!values.securityCode) {
    errors.securityCode = 'Please enter the security code';
  } else if (!isValidNum(values.securityCode)) {
    errors.securityCode = 'Invalid  security code';
  } else if (values.securityCode.length !== 3) {
    errors.securityCode = 'Security code must consist of 3 digits';
  }

  return errors;
};
