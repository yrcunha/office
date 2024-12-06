import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class UnknownError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.Unknown);
  }
}
