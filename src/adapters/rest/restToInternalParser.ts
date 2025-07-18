import { MvnoRestReponse } from "../../types/mvnoRest";
import { InternalData } from "../../types/internal";

// Converts REST response from MVNO into Telgea's internal normalized format
// SMS data is expected separately via SOAP
export function mapRestToInternal(rest: MvnoRestReponse): InternalData {
  // Direct mapping of REST fields to internal structure
  // Assumes all required fields are present and correctly typed
  return {
    telgea_user_id: rest.user_id,
    msisdn: rest.msisdn,
    usage_data: {
      total_mb: rest.usage.data.total_mb,
      roaming_mb: rest.usage.data.roaming_mb,
      country: rest.usage.data.country,
      network_type: rest.network.type,
      provider_code: rest.network.provider_code,
    },
    billing_period: {
      start: rest.usage.period.start,
      end: rest.usage.period.end,
    },
  };
}
