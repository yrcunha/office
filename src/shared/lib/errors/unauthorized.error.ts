import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.Unknown);
  }
}
