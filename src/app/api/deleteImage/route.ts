import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { key } = await request.json();
  console.log("route", key);

  try {
    const utapi = new UTApi();
    await utapi.deleteFiles(key);
  } catch (error) {
    console.error("Error deleting image:", error);
  }

  return NextResponse.json({ message: `${key} was deleted.` });
}
