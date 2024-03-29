import { z } from 'zod'

const resetPasswordSchema = z.object({
    password: z.string()
        .nonempty({ message: "يرجى إدخال كلمة المرور" })
        .min(8, { message: "كلمة المرور يجب ألا تقل عن 8" })
        .max(16, { message: "كلمة المرور يجب ألا تزيد عن 16" }),

    confirmPassword: z.string()
        .nonempty({ message: "يرجى إعادة إدخال كلمة المرور" })
        .min(8, { message: "كلمة المرور يجب ألا تقل عن 8" })
        .max(16, { message: "كلمة المرور يجب ألا تزيد عن 16" }),

}).refine((data) => data.password === data.confirmPassword, {
    message: "يرجى التأكد من مطابقة كلمتي المرور",
    path: ["confirmPassword"],
});

export default resetPasswordSchema;