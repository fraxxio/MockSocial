let profilePicStorage: string[] = [];
let postPicStorage: string[] = [];

export const getStorage = (endpoint: string) => {
  return endpoint === "profilePic" ? profilePicStorage : postPicStorage;
};

const saveArray = (arr: string[], endpoint: string) => {
  localStorage.setItem(endpoint, JSON.stringify(arr));
};

export const appendToStorage = (key: string, endpoint: string) => {
  endpoint === "profilePic" ? profilePicStorage.push(key) : postPicStorage.push(key);
};

export const removeStringFromStorage = (endpoint: string) => {
  endpoint === "profilePic" ? profilePicStorage.shift() : postPicStorage.shift();
};
