export enum ErrorCode {
  Unknown = "Unknown",
  AlreadyExists = "ResourceAlreadyExists",
  NotFound = "ResourceNotFound",
  InvalidData = "InvalidData",
}

export class CustomError extends Error {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.Unknown,
    public readonly details: Array<string> = [],
  ) {
    super(message);
    this.name = code;
  }
}
