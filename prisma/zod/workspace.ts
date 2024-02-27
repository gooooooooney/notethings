import * as z from "zod"
import { CompleteUser, relatedUserSchema, CompletePage, relatedPageSchema } from "./index"

export const workspaceSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  logo: z.string().nullish(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deleted: z.boolean(),
})

export interface CompleteWorkspace extends z.infer<typeof workspaceSchema> {
  user: CompleteUser
  pages: CompletePage[]
}

/**
 * relatedWorkspaceSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedWorkspaceSchema: z.ZodSchema<CompleteWorkspace> = z.lazy(() => workspaceSchema.extend({
  user: relatedUserSchema,
  pages: relatedPageSchema.array(),
}))
