import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const reserveTableSchema = () => z.object({
  name: z.string().min(3),
  phone: z.string().min(9).max(11),
  pax: z.string(),
  date: z.date(),
  time: z.string(),
})