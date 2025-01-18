// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: "8qkvq72u", // Replace with your project ID
  dataset: "production",        // Or your dataset name
  apiVersion: '2025-01-18',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token : "skSrV40eoT2MnfVV6mf4HniEwBa97NqzHIUq6KDasvgPyRhfZdU0nqrvJcPsEgFP29ed8b1aKbKFagXYPqO38UNJylWGa40DhCZasL2kwxUUhhirHBA9kNontL5MlRNUaTPPQF9UZl1o9JcleihbNSCOMYnGVfEkMxqWqu6MyRZ89OD5883p",
});