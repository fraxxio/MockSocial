import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2).max(50),
  usernamehandle: z.string().min(2).max(50),
  date: z.string(),
  text: z.string(),
  comments: z.coerce.number(),
  reposts: z.coerce.number(),
  likes: z.coerce.number(),
  views: z.coerce.number(),
  badge: z.string(),
  theme: z.string(),
  reaction: z.string(),
  senderusername: z.string(),
  sendertext: z.string(),
  senderdate: z.string(),
  senderreaction: z.string(),
  reverseorder: z.boolean(),
});
