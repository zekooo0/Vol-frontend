import { z } from 'zod'

const numberRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const verifyCodeSchema = z.object({
    code: z.string()
        .nonempty({ message: "يرجى إدخال رمز التوثيق" })
        .regex(numberRegex, "رمز التوثيق يجب أن يحتوي على أرقام فقط")
        .min(6, { message: "رمز التوثيق يجب أن يتكون من 6 أرقام" })
        .max(6, { message: "رمز التوثيق يجب أن يتكون من 6 أرقام" }),
})

export default verifyCodeSchema;