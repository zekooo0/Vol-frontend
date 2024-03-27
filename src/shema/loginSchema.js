import { z } from 'zod'

const loginSchema = z.object({
    email: z.string()
        .nonempty({ message: "يرجى إدخال البريد الإلكتروني" })
        .email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),

    password: z.string()
        .nonempty({ message: "يرجى إدخال كلمة المرور" })
        .min(8, { message: "كلمة المرور يجب ألا تقل عن 8" })
        .max(16, { message: "كلمة المرور يجب ألا تزيد عن 16" }),
})

export default loginSchema;