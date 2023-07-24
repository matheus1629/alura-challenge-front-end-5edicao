import Joi from "joi";

export default Joi.object({
  file: Joi.any()
    .meta({
      // Adicione os tipos de arquivo permitidos aqui
      allowedTypes: [".svg", ".jpg", ".png"],
      // Adicione o tamanho máximo do arquivo em bytes aqui
      maxSize: 1000000, // 1 MB
    })
    .required(),
  category: Joi.string().required(),
  name: Joi.string().required().messages({
    "string.empty": "Por favor, digite o nome do produto",
    "any.required": "Por favor, digite o nome do produto",
  }),
  price: Joi.number().positive().required().messages({
    "number.positive": "O preço do produto precisa ser positivo",
    "number.base": "Por favor, digite o preço do produto",
  }),
  description: Joi.string().required(),
});
