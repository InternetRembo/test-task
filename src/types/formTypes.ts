export type ShippingValues = {
  name: string;
  phone: string;
  street: string;
  additionalInfo: string;
  city: string;
  zip: string;
  country: string;
};
export type ShippingErrors = {
  name?: string;
  phone?: string;
  street?: string;
  additionalInfo?: string;
  city?: string;
  zip?: string;
  country?: string;
};
export type BillingValues = {
  name: string;
  email: string;
  street: string;
  additionalInfo: string;
  city: string;
  zip: string;
  country: string;
};

export type BillingErrors = {
  name?: string;
  email?: string;
  street?: string;
  additionalInfo?: string;
  city?: string;
  zip?: string;
  country?: string;
};

export type PaymentValues = {
  cardholderName: string;
  cardNumber: string;
  expireDate: string;
  securityCode: string;
};
export type PaymentErrors = {
  cardholderName?: string;
  cardNumber?: string;
  expireDate?: string;
  securityCode?: string;
};
