import Joi from "joi";

export default Joi.object({
  name: Joi.string().required(),
  message: Joi.string().required(),
});
