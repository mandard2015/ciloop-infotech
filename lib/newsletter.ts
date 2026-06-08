export type NewsletterSubscription = {
  email: string;
  name?: string;
};

export async function subscribeToNewsletter(subscription: NewsletterSubscription) {
  const provider = process.env.NEXT_PUBLIC_NEWSLETTER_PROVIDER;
  if (!provider) {
    throw new Error("Newsletter provider is not configured.");
  }

  return {
    status: "pending",
    provider,
    subscription,
  };
}
