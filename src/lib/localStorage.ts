export const getStorage = (endpoint: string) => {
  const storedData = localStorage.getItem(endpoint);
  return storedData ? JSON.parse(storedData) : [];
};

const saveArray = (arr: string[], endpoint: string) => {
  localStorage.setItem(endpoint, JSON.stringify(arr));
};

export const appendToStorage = (key: string, endpoint: string) => {
  const storageData = getStorage(endpoint);
  const updatedArray = [...storageData, key];
  saveArray(updatedArray, endpoint);
};

export const removeStringFromStorage = (indexToRemove: number, endpoint: string) => {
  const updatedArray = getStorage(endpoint).filter(
    (_: any, index: number) => index !== indexToRemove
  );
  saveArray(updatedArray, endpoint);
};
