import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class InvalidPayloadError extends CustomError {
  constructor(message: string, details: string[]) {
    super(message, ErrorCodes.InvalidPayload, details);
  }
}
