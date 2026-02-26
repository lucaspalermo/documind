const ASAAS_BASE_URL = process.env.NEXT_PUBLIC_ASAAS_ENVIRONMENT === "production"
  ? "https://api.asaas.com/v3"
  : "https://sandbox.asaas.com/api/v3";

const ASAAS_API_KEY = process.env.ASAAS_API_KEY;

async function asaasRequest(path: string, options: RequestInit = {}) {
  const res = await fetch(`${ASAAS_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      access_token: ASAAS_API_KEY || "",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.description || `Asaas error: ${res.status}`);
  }

  return res.json();
}

export async function createCustomer(data: {
  name: string;
  email: string;
  cpfCnpj?: string;
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
}) {
  return asaasRequest("/subscriptions", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getSubscription(subscriptionId: string) {
  return asaasRequest(`/subscriptions/${subscriptionId}`);
}

export async function cancelSubscription(subscriptionId: string) {
  return asaasRequest(`/subscriptions/${subscriptionId}`, {
    method: "DELETE",
  });
}

export async function createPaymentLink(data: {
  name: string;
  description: string;
  value: number;
  billingType: "UNDEFINED";
  chargeType: "RECURRENT";
  subscriptionCycle: "MONTHLY";
}) {
  return asaasRequest("/paymentLinks", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
