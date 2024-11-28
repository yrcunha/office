import { CustomError, ErrorCodes } from "@/commons/errors/custom-errors";

export class ErrorForServiceUnavailability extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ServiceUnavailable);
  }
}
