import { CustomError, ErrorCodes } from "./custom-errors";

export class ErrorForResourceAlreadyExists extends CustomError {
  constructor(message: string) {
    super(message, ErrorCodes.ResourceAlreadyExists);
  }
}
