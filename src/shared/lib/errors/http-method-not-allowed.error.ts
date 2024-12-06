import { CustomError, ErrorCodes } from "@/shared/lib/errors/custom.errors";

export class HttpMethodNotAllowedError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.MethodNotAllow);
  }
}
