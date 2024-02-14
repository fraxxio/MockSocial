import { z } from "zod";

const MAX_IMAGE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const formSchema = z.object({
  username: z.string().min(2).max(50),
  usernamehandle: z.string().min(2).max(50),
  date: z.string(),
  text: z.string(),
  comments: z.number(),
  reposts: z.number(),
  likes: z.number(),
  views: z.number(),
});
