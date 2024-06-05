import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special characters");


  export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(6, "Password must be at least 6 characters")
  })