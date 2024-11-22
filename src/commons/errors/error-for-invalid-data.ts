import { CustomError, ErrorCodes } from "./custom-errors";

export class ErrorForInvalidData extends CustomError {
  constructor(message: string, details: string[]) {
    super(message, ErrorCodes.InvalidData, details);
  }
}
