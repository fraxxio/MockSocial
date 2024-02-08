import { appendToStorage, removeStringFromStorage, getStorage } from "@/lib/localStorage";

const deleteImage = async (key: string) => {
  try {
    const response = await fetch("api/deleteImage", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: key }),
    });
    if (!response.ok) {
      throw new Error("Failed to delete image");
    }
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

export function imgCleanup(key: string) {
  const storage = getStorage();
  if (storage.length === 0) {
    appendToStorage(key);
    return;
  }
  deleteImage(storage[0]);
  appendToStorage(key);
  removeStringFromStorage(0);
}
