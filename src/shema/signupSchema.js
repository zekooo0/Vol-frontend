import { z } from 'zod'

const numberRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const signupSchema = z.object({
    firstName: z.string()
        .trim()
        .nonempty({ message: "يرجى إدخال الإسم الأول" }),

    lastName: z.string()
        .trim()
        .nonempty({ message: "يرجى إدخال الإسم الأخير" }),

    mobile: z.string()
        .nonempty({ message: "يرجى إدخال رقم الموبايل" })
        .regex(numberRegex, "رقم الموبايل يجب أن يحتوي على أرقام فقط"),

    email: z.string()
        .trim()
        .nonempty({ message: "يرجى إدخال البريد الإلكتروني" })
        .email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),

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

export default signupSchema;