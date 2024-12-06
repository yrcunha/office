import { CustomError, ErrorCodes } from "@/commons/errors/custom.errors";

export class HttpMethodNotAllowedError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.MethodNotAllow);
  }
}
