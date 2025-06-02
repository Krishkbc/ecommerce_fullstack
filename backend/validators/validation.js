import joi from "joi";

const validateNewUser = (user) => {
  const joiSchema = joi.object({
    name: joi.string().min(5).max(50).required(),
    email: joi.string().email().min(5).max(50).required(),
    password: joi.string().min(8).max(50).required(),
    is_delete: joi.boolean().default(false),
    country: joi.string().optional().default("India"),
    state: joi.string().optional().default("Gujarat"),
  });

  return joiSchema.validate(user);
};

const validateLogin = (user) => {
  const joiSchema = joi.object({
    email: joi.string().email().min(5).max(50).required(),
    password: joi.string().min(8).max(50).required(),
  });
  return joiSchema.validate(user);
};

export { validateNewUser, validateLogin };
