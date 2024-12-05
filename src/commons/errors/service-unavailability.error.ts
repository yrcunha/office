import { CustomError, ErrorCodes } from "@/commons/errors/custom.errors";

export class ServiceUnavailabilityError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ServiceUnavailable);
  }
}
