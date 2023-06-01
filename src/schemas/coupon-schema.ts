import { z } from "zod";

export const incrementCouponFormSchema = z.object({
  coupon: z
    .string()
    .nonempty("Esse campo é obrigatório")
    .toUpperCase()
    .min(6, "O cupom deve ter no minímo 6 digítos")
    .max(6, "O cupom deve ter no maxímo 6 digítos"),
});

export type TCouponFormData = z.infer<typeof incrementCouponFormSchema>;
