import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class InvalidDataError extends CustomError {
  constructor(message: string, details: string[]) {
    super(message, ErrorCodes.InvalidData, details);
  }
}
