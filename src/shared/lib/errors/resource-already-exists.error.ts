import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class ResourceAlreadyExistsError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ResourceAlreadyExists);
  }
}
