export const services = ["Salesforce architecture", "Claude AI & developer workflows", "ArcGIS & Salesforce", "Websites & connected software", "Help me decide", "Websites & ecommerce", "Software & integrations", "AI & automation", "Salesforce & CRM"] as const;
export const timelines = ["As soon as practical", "Within 1–3 months", "Exploring ideas"] as const;
export type EnquiryInput = {
  id: string; name: string; email: string; business: string; service: string;
  timeline: string; message: string; consent: boolean; website?: string;
};

export function validateEnquiry(value: unknown): EnquiryInput | null {
  if (!value || typeof value !== "object") return null;
  const data = value as Record<string, unknown>;
  const fields = ["id", "name", "email", "business", "service", "timeline", "message"];
  if (fields.some((field) => typeof data[field] !== "string")) return null;
  const clean = Object.fromEntries(fields.map((field) => [field, (data[field] as string).trim()]));
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(clean.id)) return null;
  if (clean.name.length < 2 || clean.name.length > 100 || clean.business.length > 150) return null;
  if (clean.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) return null;
  if (!(services as readonly string[]).includes(clean.service) || !(timelines as readonly string[]).includes(clean.timeline)) return null;
  if (clean.message.length < 20 || clean.message.length > 3000 || data.consent !== true) return null;
  return { ...clean, email: clean.email.toLowerCase(), consent: true, website: typeof data.website === "string" ? data.website : "" } as EnquiryInput;
}
