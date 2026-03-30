import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа').max(64, 'Максимум 64 символа'),
  username: z.string().min(2, 'Минимум 2 символа').max(64, 'Максимум 64 символа'),
  email: z.string().email('Некорректный email'),
  city: z.string().min(2, 'Минимум 2 символа').max(64, 'Максимум 64 символа'),
  phone: z.string()
    .regex(/^[\d\s\(\)\+-]+$/, 'Только цифры, скобки, пробелы, плюс и дефис')
    .min(5, 'Минимум 5 символов')
    .max(20, 'Максимум 20 символов'),
  companyName: z.string().min(2, 'Минимум 2 символа').max(64, 'Максимум 64 символа')
});