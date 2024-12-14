import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class ResourceNotFoundError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ResourceNotFound);
  }
}
