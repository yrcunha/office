import { DataValidationForCreateUser, UserProps } from "./props/user.props";
import { InvalidDataError } from "@/commons/errors/invalid-data.error";

export function createUser(props: UserProps) {
  const parsed = DataValidationForCreateUser.safeParse(props);
  if (parsed.success) return parsed.data;
  throw new InvalidDataError(
    "Houve erro na validação dos dados de entrada.",
    [],
  );
}
