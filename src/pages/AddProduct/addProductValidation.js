import Joi from "joi";

export default Joi.object({
  img: Joi.any()
    .required()
    .custom((value, helpers) => {
      // verifica se o valor é um FileList
      if (!(value instanceof FileList)) {
        return helpers.message("Por favor, selecione um arquivo.");
      }
      // verifica se o FileList tem apenas um arquivo
      if (value.length !== 1) {
        return helpers.message("Por favor, selecione apenas um arquivo.");
      }
      // pega o primeiro arquivo do FileList
      const file = value[0];
      // verifica se o tamanho do arquivo é menor que 2MB
      if (file.size > 2 * 1024 * 1024) {
        return helpers.message("O arquivo deve ter no máximo 2MB.");
      }
      // verifica se o formato do arquivo é svg, jpg ou png
      const allowedFormats = ["image/svg+xml", "image/jpeg", "image/png"];
      if (!allowedFormats.includes(file.type)) {
        return helpers.message(
          "O arquivo deve ter um dos formatos: SVG, JPG ou PNG."
        );
      }
      // retorna o valor válido
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
