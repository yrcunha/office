import { DataValidationForCreateUser, UserProps } from "./props/user.props";
import { ErrorForInvalidData } from "../commons/errors/error-for-invalid-data";

export function createUser(props: UserProps) {
  const parsed = DataValidationForCreateUser.safeParse(props);
  if (parsed.success) return parsed.data;
  throw new ErrorForInvalidData(
    "Houve erro na validação dos dados de entrada.",
    [],
  );
}
