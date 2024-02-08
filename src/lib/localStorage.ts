export const getStorage = () => {
  const storedData = localStorage.getItem("imgKey");
  return storedData ? JSON.parse(storedData) : [];
};

const saveArray = (arr: string[]) => {
  localStorage.setItem("imgKey", JSON.stringify(arr));
};

export const appendToStorage = (key: string) => {
  const storageData = getStorage();
  const updatedArray = [...storageData, key];
  saveArray(updatedArray);
};

export const removeStringFromStorage = (indexToRemove: number) => {
  const updatedArray = getStorage().filter((_: any, index: number) => index !== indexToRemove);
  saveArray(updatedArray);
};
