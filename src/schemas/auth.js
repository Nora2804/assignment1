import joi from "joi";
export const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "tên trường k đc để trống",
        "any.required": "trường tên là bắt buộc",
    }),
    email: joi.string().email().required().messages({
        "string.empty": "Email không đc để trống",
        "any.required": "trường email là bắt buộc",
        "string.email": "email k đúng định dạng",
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "mật khẩu không đc để trống",
        "any.required": "mật khẩu là bắt buộc",
        "string.min": "mật khẩu phải có ít nhất {#limit} ký tự",
    }),
    confirmPassword: joi.string().required().valid(joi.ref("password")).messages({
        "string.empty": " xác nhận mất khẩu k đc để trống",
        "any.required": "trường xác nhận mật khẩu là bắt buộc",
        "any.only": "xác nhận mật khẩu k khớp"
    })

});