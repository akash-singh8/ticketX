import { z } from "zod";

const userRaisedSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters")
    .max(200, "Email cannot exceed 200 characters")
    .email("Email must be a valid email address"),
});

const ticketSchema = z.object({
  category: z
    .string()
    .min(3, "Category must be at least 3 characters")
    .max(25, "Category cannot exceed 25 characters"),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title cannot exceed 200 characters"),
  message: z
    .string()
    .min(3, "Message must be at least 3 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
  dateRaised: z
    .string()
    .min(14, "Date must be atleast 14 char HH:MM:SS DD/MM/YY")
    .max(80, "Date cannot exceed 80 characters"),
  status: z.enum(["pending", "inreview", "resolved"]),
  raisedBy: userRaisedSchema,
});

export default ticketSchema;
