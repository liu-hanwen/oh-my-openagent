import * as z from "zod"
import { OhMyOpenQuantConfigSchema } from "../src/config/schema"

export function createOhMyOpenQuantJsonSchema(): Record<string, unknown> {
  const jsonSchema = z.toJSONSchema(OhMyOpenQuantConfigSchema, {
    target: "draft-7",
    unrepresentable: "any",
  })

  return {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "https://raw.githubusercontent.com/code-yeongyu/oh-my-openagent/dev/assets/oh-my-openquant.schema.json",
    title: "Oh My OpenCode Configuration",
    description: "Configuration schema for oh-my-openquant plugin",
    ...jsonSchema,
  }
}
