import * as z from "zod"

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  imageUrl: z.string(),
  externalUserId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
