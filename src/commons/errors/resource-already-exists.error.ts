import { CustomError, ErrorCodes } from "@/commons/errors/custom.errors";

export class ResourceAlreadyExistsError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ResourceAlreadyExists);
  }
}
