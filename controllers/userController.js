const asyncHandler = require("express-async-handler");
const { registerUserSchema } = require("../helpers/schemaValidator");
const userModel = require("../models/userModel");
const generateToken = require("../helpers/auth/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const registerUserSchemaValidator = registerUserSchema.validate(req.body, {
    abortEarly: true,
  });
  if (registerUserSchemaValidator.error) {
    return res.status(400).json({
      status: 400,
      message: "Schema validation error",
      error: registerUserSchemaValidator.error.message,
    });
  }

  const { email, password } = req.body;

  const userExist = await userModel.findOne({ email });

  if (userExist) {
    return res
      .status(400)
      .json({ status: 400, message: "User already exists..!", data: userExist });
  }

  const user = await userModel.create(req.body);
  const token = generateToken(user._id);
  if (user) {
    return res.status(201).json({
      status: 201,
      message: "User created successfully...!",
      data: { ...user._doc, token },
    });
  } else {
    res.status(400).json({ status: 400, message: "User creation failed...!" });
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  const token = generateToken(user._id);

  if (user && (await user.matchPassword(password))) {
    return res.status(200).json({
      status: 200,
      message: "User created successfully...!",
      data: { ...user._doc, token },
    });
  }
});

module.exports = { registerUser, authUser };
