import { z } from "zod";

export const DataValidationForCreateUser = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type UserProps = {
  name: string;
  email: string;
};
