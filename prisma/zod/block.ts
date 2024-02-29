import * as z from "zod"
import { BlockType } from "@prisma/client"
import { CompletePage, relatedPageSchema } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const blockSchema = z.object({
  id: z.number().int(),
  type: z.nativeEnum(BlockType),
  content: jsonSchema,
  pageId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteBlock extends z.infer<typeof blockSchema> {
  page: CompletePage
}

/**
 * relatedBlockSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBlockSchema: z.ZodSchema<CompleteBlock> = z.lazy(() => blockSchema.extend({
  page: relatedPageSchema,
}))
