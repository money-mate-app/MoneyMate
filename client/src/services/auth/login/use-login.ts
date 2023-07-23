import { z } from "zod";

const loginResponseSchema = z.object({
    user: z.object({
        id: z.number(),
    })
})

export type LoginResponse = z.infer<typeof loginResponseSchema>