export const authKeys = {
  all: ["auth"] as const,
  getTokens: () => [...authKeys.all, "getTokens"] as const,
  getAuthUserDetails: () => [...authKeys.all, "getAuthUserDetails"] as const,
  checkAuth: () => [...authKeys.all, "checkAuth"] as const,
  getCurrentUser: () => [...authKeys.all, "checkAuth"] as const,
};
