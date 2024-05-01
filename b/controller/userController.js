import User from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const bodyData = req.body;
    const newUser = new User(bodyData);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
