export const buildWhatsAppUrl = (phone: string, message = "Hello, I would like to learn more about your services.") => {
  const normalized = phone.replace(/[^\d+]/g, "");
  const encoded = encodeURIComponent(message);

  return `https://wa.me/${normalized}?text=${encoded}`;
};
