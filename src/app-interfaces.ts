export interface ServiceConfigMapping {
  name: string;
  url: string;
}

export interface ServiceStatusResponse {
  name: string;
  isHealthy: boolean;
}
