import { CustomError, ErrorCode } from "@/utils/errors/custom-error";

export class ErrorForInvalidData extends CustomError {
  constructor(message: string, details: Array<string>) {
    super(message, ErrorCode.InvalidData, details);
  }
}
