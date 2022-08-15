export const isValidData = (data) => /^[a-zA-Z\s]+$/.test(data);

export const isValidUppercase = (data) => /^[A-Z\s]+$/.test(data);

export const isValidNum = (data) => /^[0-9]+$/.test(data);

export const isValidEmail = (data) =>
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(data);
