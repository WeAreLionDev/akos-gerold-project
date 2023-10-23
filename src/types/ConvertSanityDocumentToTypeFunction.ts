export interface ConvertSanityDocument<T = unknown, K = unknown> {
  (
    items: T[],
    options?: {
      prefix: string | undefined | boolean | null
    },
  ): K[]
}
