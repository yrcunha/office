import { DataValidationForCreateUser, UserProps } from "./props/user.props";
import { ErrorForInvalidData } from "../commons/errors/error-for-invalid-data";

export function createUser(user: UserProps) {
  const parsed = DataValidationForCreateUser.safeParse(user);
  if (parsed.success) return parsed.data;
  throw new ErrorForInvalidData("", []);
}
