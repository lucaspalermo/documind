const ASAAS_BASE_URL = process.env.ASAAS_ENVIRONMENT === "production"
  ? "https://api.asaas.com/v3"
  : "https://sandbox.asaas.com/api/v3";

const ASAAS_API_KEY = process.env.ASAAS_API_KEY;

async function asaasRequest(path: string, options: RequestInit = {}) {
  if (!ASAAS_API_KEY) {
    throw new Error("ASAAS_API_KEY is not configured");
  }

  const res = await fetch(`${ASAAS_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      access_token: ASAAS_API_KEY,
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
