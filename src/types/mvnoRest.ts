// Type definitions for external MVNO REST API responses
// Mirrors expected structure of MVNO responses
export interface MvnoRestReponse {
  user_id: string;
  msisdn: string;
  usage: {
    data: {
      total_mb: number;
      roaming_mb: number;
      country: string;
    };
    period: {
      start: string;
      end: string;
    };
  };
  network: {
    type: string;
    provider_code: string;
  };
}
