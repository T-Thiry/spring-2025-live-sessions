import { User } from "../models/user.js"
import bcrypt from "bcrypt"

export const postUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const salt = bcrypt.genSaltSync()

    const user = new User({ email, password: bcrypt.hashSync(password, salt) })
    await user.save()

    res.status(200).json({
      success: true,
      message: "User created successfully",
      response: {
        id: user._id,
        accessToken: user.accessToken
      }
    })

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Failed to create user",
      response: error
    })


  }

}