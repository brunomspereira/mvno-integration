// in this file we will do the tests for our parsers

import fs from "fs";
import path from "path";
import { mapRestToInternal } from "./adapters/rest/restToInternalParser";
import { MvnoRestReponse } from "./types/mvnoRest";
import { mapSoapToInternal } from "./adapters/soap/soapToInternalParser";

// testing the REST API to internal API
// using mock data to test it
const mockPathRest = path.join(__dirname, "mocks", "mvno-rest.json");
const rawDataRest = fs.readFileSync(mockPathRest, "utf8");
const jsonDataRest: MvnoRestReponse = JSON.parse(rawDataRest);

const restToInternalFormat = mapRestToInternal(jsonDataRest);
console.log("REST API to Internal API");
console.log(JSON.stringify(restToInternalFormat, null, 2));

// testing the SOAP API to internal API
// using mock data to test it
const mockPathSoap = path.join(__dirname, "mocks", "mvno-soap.xml");
const soapToInternalFormat = mapSoapToInternal(mockPathSoap);
console.log("SOAP API to Internal API");
console.log(JSON.stringify(soapToInternalFormat, null, 2));
