import StorageKeys from "@/constants/storage";

export const getStorage = (key: keyof typeof StorageKeys) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(StorageKeys[key]);
  }
};
export const setStorage = (key: keyof typeof StorageKeys, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(StorageKeys[key], value);
  }
};
