import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  /*
   *
   *
   * get user details from frontend
   * validation - not empty and other validation
   * check if user already exists : by username and email
   * check for images, check for avatar
   * upload them to cloudinary, avatar
   * create user object - create entry in db
   * remove password and refresh token field from response
   * check for user creation
   * return res
   *
   *
   * */

  const { username, email, fullname, password } = req.body;
  console.log("username", username);
  // console.log("email", email);
  // console.log("fullname", fullname);
  // console.log("password", password);
});

export { registerUser };
