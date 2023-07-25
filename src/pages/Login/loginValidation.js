import Joi from "joi";

export default Joi.object({
  email: Joi.string().required().messages({
    "string.empty": "Por favor, digite seu email.",
    "any.required": "Por favor, digite seu email.",
  }),

  password: Joi.string().required().messages({
    "string.empty": "Por favor, digite sua senha.",
    "any.required": "Por favor, digite sua senha.",
  }),
});
