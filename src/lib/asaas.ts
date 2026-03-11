// Read env at request time to support key rotation and avoid stale closures
function getBaseUrl() {
  return process.env.NEXT_PUBLIC_ASAAS_ENVIRONMENT === "production"
    ? "https://api.asaas.com/v3"
    : "https://sandbox.asaas.com/api/v3";
}

async function asaasRequest(path: string, options: RequestInit = {}) {
  const apiKey = process.env.ASAAS_API_KEY;
  if (!apiKey) {
    throw new Error("ASAAS_API_KEY is not configured");
  }

  const res = await fetch(`${getBaseUrl()}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      access_token: apiKey,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const message = errorData?.errors?.[0]?.description || errorData?.description || `Asaas error: ${res.status}`;
    throw new Error(message);
  }

  return res.json();
}

export async function createCustomer(data: {
  name: string;
  email: string;
  cpfCnpj: string;
}) {
  return asaasRequest("/customers", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function findCustomerByEmail(email: string) {
  return asaasRequest(`/customers?email=${encodeURIComponent(email)}`);
}

export async function createSubscription(data: {
  customer: string;
  billingType: "PIX" | "CREDIT_CARD" | "BOLETO";
  value: number;
  cycle: "MONTHLY";
  description: string;
  nextDueDate: string;
  externalReference?: string;
}) {
  return asaasRequest("/subscriptions", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getSubscription(subscriptionId: string) {
  return asaasRequest(`/subscriptions/${subscriptionId}`);
}

export async function getSubscriptionPayments(subscriptionId: string) {
  return asaasRequest(`/subscriptions/${subscriptionId}/payments`);
}

export async function getPaymentPixQrCode(paymentId: string) {
  return asaasRequest(`/payments/${paymentId}/pixQrCode`);
}

export async function cancelSubscription(subscriptionId: string) {
  return asaasRequest(`/subscriptions/${subscriptionId}`, {
    method: "DELETE",
  });
}
