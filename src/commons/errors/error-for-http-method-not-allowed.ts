import { CustomError, ErrorCodes } from "@/commons/errors/custom-errors";

export class ErrorForHttpMethodNotAllowed extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.MethodNotAllow);
  }
}
