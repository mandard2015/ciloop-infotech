export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

export async function sendEmail(payload: EmailPayload) {
  const provider = process.env.NEXT_PUBLIC_EMAIL_SERVICE_PROVIDER;
  if (!provider) {
    throw new Error("Email service provider is not configured.");
  }

  return {
    status: "pending",
    provider,
    payload,
  };
}
