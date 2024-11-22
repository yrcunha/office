import { CustomError, ErrorCode } from "@/utils/errors/custom-error";

export class ErrorForResourceNotFound extends CustomError {
  constructor(message: string) {
    super(message, ErrorCode.NotFound);
  }
}
