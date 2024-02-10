export async function deleteImage(key: string) {
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
}
