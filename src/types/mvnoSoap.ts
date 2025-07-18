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
