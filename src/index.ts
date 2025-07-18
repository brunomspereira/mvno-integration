// Entry point: combines parsed REST and SOAP data into final internal format
// Reads mock data from files and outputs normalized structure

import fs from "fs";
import path from "path";
import { mapRestToInternal } from "./adapters/rest/restToInternalParser";
import { MvnoRestReponse } from "./types/mvnoRest";
import { mapSoapToInternal } from "./adapters/soap/soapToInternalParser";

// Parse REST data and map to internal structure
const mockPathRest = path.join(__dirname, "mocks", "mvno-rest.json");
const rawDataRest = fs.readFileSync(mockPathRest, "utf8");
const jsonDataRest: MvnoRestReponse = JSON.parse(rawDataRest);

const restToInternalFormat = mapRestToInternal(jsonDataRest);
console.log("REST API to Internal API");
console.log(JSON.stringify(restToInternalFormat, null, 2));

// Parse SOAP data and map to internat structure
const mockPathSoap = path.join(__dirname, "mocks", "mvno-soap.xml");
const soapToInternalFormat = mapSoapToInternal(mockPathSoap);
console.log("SOAP API to Internal API");
console.log(JSON.stringify(soapToInternalFormat, null, 2));
