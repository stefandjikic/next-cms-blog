import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { tag } from './schemas/tag'
import { comment } from './schemas/comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, comment],
}
