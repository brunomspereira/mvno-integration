import { MvnoSoapResponse } from "../../types/mvnoSoap";
import { InternalData } from "../../types/internal";
import fs from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";
import { cursorTo } from "readline";

// for test purpose we will be using the mock file here
// in the real world we would be receiving the string from the API and parse it
export function mapSoapToInternal(filePath: string): InternalData {
  const xmlData = fs.readFileSync(filePath, "utf-8");

  const parser = new XMLParser({
    ignoreAttributes: false, // want to include attributes in the parsed result
    attributeNamePrefix: "", // attributes will be parsed as normal properties instead of being prefixed
  });

  const parsed: MvnoSoapResponse = parser.parse(xmlData);
  const soap = parsed["soapenv:Envelope"]["soapenv:Body"]["sms:ChargeSMS"];

  return {
    telgea_user_id: soap["sms:UserID"],
    msisdn: soap["sms:PhoneNumber"],
    sms_charges: {
      message_id: soap["sms:MessageID"],
      timestamp: soap["sms:Timestamp"],
      amount: soap["sms:ChargeAmount"],
      currency: soap["sms:Currency"],
    },
  };
}
