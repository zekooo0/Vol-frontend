import { z } from 'zod'

const forgetPasswordSchema = z.object({
    email: z.string()
        .nonempty({ message: "يرجى إدخال البريد الإلكتروني" })
        .email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
})

export default forgetPasswordSchema;