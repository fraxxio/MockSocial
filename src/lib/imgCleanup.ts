import { deleteImage } from "./deleteImgReq";

export function imgCleanup(key: string) {
  setTimeout(() => {
    deleteImage(key);
  }, 2000);
}
