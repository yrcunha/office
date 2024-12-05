import { CustomError, ErrorCodes } from "@/commons/errors/custom-errors";

export class UnknownError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.Unknown);
  }
}
