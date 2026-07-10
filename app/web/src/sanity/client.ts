import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "YOUR-PROJECT-ID",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});

//   projectId: 'lophjagn',