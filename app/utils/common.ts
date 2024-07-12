export const SessionStorage = (): Storage | undefined =>
  typeof window !== "undefined" ? window.sessionStorage : undefined;

export const LocalStorage = (): Storage | undefined =>
  typeof window !== "undefined" ? window.localStorage : undefined;

export const Location = (): Location | undefined =>
  typeof window !== "undefined" ? window.location : undefined;

export const reloadWindow = () => {
  typeof window !== "undefined" && window?.location?.reload();
};
