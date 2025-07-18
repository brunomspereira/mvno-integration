// Type definitions for Telgea's internal API format
// Used for type safety and structure enforcement

export interface InternalUsageData {
  total_mb: number;
  roaming_mb: number;
  country: string;
  network_type: string;
  provider_code: string;
}

export interface InternalSmsCharges {
  message_id: string;
  timestamp: string;
  amount: number;
  currency: string;
}

export interface InternalBillingPeriod {
  start: string;
  end: string;
}

// Because the REST api doesn't return SMS charges infromation
// it's able to be empty
// While the SOAP response doesn't return usage data and billing period
// these are also able to be empty
export interface InternalData {
  telgea_user_id: string;
  msisdn: string;
  usage_data?: InternalUsageData;
  sms_charges?: InternalSmsCharges;
  billing_period?: InternalBillingPeriod;
}
