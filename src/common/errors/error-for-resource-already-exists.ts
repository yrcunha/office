import { CustomError, ErrorCode } from "@/utils/errors/custom-error";

export class ErrorForResourceAlreadyExists extends CustomError {
  constructor(message: string) {
    super(message, ErrorCode.AlreadyExists);
  }
}
