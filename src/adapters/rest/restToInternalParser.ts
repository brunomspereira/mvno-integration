import { MvnoRestReponse } from "../../types/mvnoRest";
import { InternalData } from "../../types/internal";

// In this function will be mapping the data given from the telecoms API response
// to Telgea's internal API
// REST response doesn't have sms information
export function mapRestToInternal(rest: MvnoRestReponse): InternalData {
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
