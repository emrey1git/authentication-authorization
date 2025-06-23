export const selectIsLoggedIn = (state) => state?.auth?.isLoggedIn ?? false;
export const selectUser = (state) => state?.auth?.user ?? null;
export const selectIsRefreshing = (state) => state?.auth?.isRefreshing ?? false;
