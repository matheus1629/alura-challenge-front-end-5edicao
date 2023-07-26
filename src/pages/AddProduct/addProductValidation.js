import Joi from "joi";

export default Joi.object({
  img: Joi.any()
    .required()
    .custom((value, helpers) => {
      console.log(value);

      if (!(value instanceof FileList)) {
        return helpers.error("img.fileList", {
          message: "Por favor, selecione um arquivo.",
        });
      }

      if (value.length !== 1) {
        return helpers.error("img.singleFile", {
          message: "Por favor, selecione apenas um arquivo.",
        });
      }

      const file = value[0];

      if (file.size > 2 * 1024 * 1024) {
        return helpers.error("img.fileSize", {
          message: "O arquivo deve ter no máximo 2MB.",
        });
      }

      const allowedFormats = ["image/svg+xml", "image/jpeg", "image/png"];
      if (!allowedFormats.includes(file.type)) {
        return helpers.error("img.fileFormat", {
          message: "O arquivo deve ter um dos formatos: SVG, JPG ou PNG.",
        });
      }

      return value;
    }),
  category: Joi.string().required().messages({
    "string.empty": "Por favor, seleciona uma categoria do produto.",
    "any.required": "Por favor, selecione uma categoria do produto.",
  }),
  name: Joi.string().required().messages({
    "string.empty": "Por favor, digite o nome do produto.",
    "any.required": "Por favor, digite o nome do produto.",
  }),
  price: Joi.number().positive().required().messages({
    "any.required": "Por favor, digite o preço do produto.",
    "number.positive": "O preço do produto precisa ser positivo.",
    "number.base": "Por favor, digite o preço do produto.",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Por favor, digite a descrição do produto.",
    "any.required": "Por favor, digite a descrição do produto.",
  }),
});
