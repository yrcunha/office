import { CustomError, ErrorCodes } from "./custom.errors";

export class ResourceAlreadyExistsError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ResourceAlreadyExists);
  }
}
