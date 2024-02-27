import * as z from "zod"
import { PageType } from "@prisma/client"
import { CompleteWorkspace, relatedWorkspaceSchema } from "./index"

export const pageSchema = z.object({
  id: z.string(),
  workspaceId: z.string(),
  type: z.nativeEnum(PageType),
  name: z.string().nullish(),
  icon: z.string().nullish(),
  coverSrc: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deleted: z.boolean(),
})

export interface CompletePage extends z.infer<typeof pageSchema> {
  workspace: CompleteWorkspace
}

/**
 * relatedPageSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedPageSchema: z.ZodSchema<CompletePage> = z.lazy(() => pageSchema.extend({
  workspace: relatedWorkspaceSchema,
}))
