"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function registerUser(formData: any) {
  try {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      return { success: false, error: "Missing fields" };
    }

    // Check if user exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      return { success: false, error: "Email already registered" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
      role: "CUSTOMER", // Default role
    });

    return { success: true };
  } catch (error: any) {
    console.error("Registration failed", error);
    return { success: false, error: "An error occurred during registration" };
  }
}
