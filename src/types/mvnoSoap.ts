// Type definitions for external MVNO SOAP API responses
// Mirrors expected structure of MVNO responses
export interface MvnoSoapResponse {
  "soapenv:Envelope": {
    "soapenv:Body": {
      "sms:ChargeSMS": {
        "sms:UserID": string;
        "sms:PhoneNumber": string;
        "sms:MessageID": string;
        "sms:Timestamp": string;
        "sms:ChargeAmount": number;
        "sms:Currency": string;
      };
    };
  };
}
