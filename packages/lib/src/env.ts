import { Type } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

const envSchema = Type.Object({
  // biome-ignore lint/style/useNamingConvention: global variable
  // DATABASE_URL: Type.String({ format: 'uri' }),
  // biome-ignore lint/style/useNamingConvention: global variable
  API_PORT: Type.Number({ default: '3000' }),
  // biome-ignore lint/style/useNamingConvention: global variable
  WEB_PORT: Type.Number({ default: '3001' }),
})

export const env = Value.Parse(envSchema, process.env)
