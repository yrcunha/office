import { DataValidationForCreateUser, UserProps } from "./props/user.props";
import { InvalidPayloadError } from "@/shared/lib/errors/invalid-payload.error";

export function createUser(props: UserProps) {
  const parsed = DataValidationForCreateUser.safeParse(props);
  if (parsed.success) return parsed.data;
  throw new InvalidPayloadError(
    "Houve erro na validação dos dados de entrada.",
    [],
  );
}
