import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class ServiceUnavailabilityError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ServiceUnavailable);
  }
}
