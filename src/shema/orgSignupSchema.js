import { z } from 'zod'

const numberRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const orgSignupSchema = z.object({
    name: z.string()
        .trim()
        .nonempty({ message: "يرجى إدخال اسم المؤسسة" }),

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

    // file: z.string()
    // papers: z.array(
    //     z.file({
    //         required_optional: true, // to allow either a single file or an array of files
    //     })
    // ).min(1).max(3), // Allow min 1 and max 3 files

}).refine((data) => data.password === data.confirmPassword, {
    message: "يرجى التأكد من مطابقة كلمتي المرور",
    path: ["confirmPassword"],
}).refine((data) => {
    console.log(data.papers)
    return !data.papers
}, {
    message: "يرجى تحميل أوراق التوثيق",
    path: ["papers"],
});

export default orgSignupSchema;