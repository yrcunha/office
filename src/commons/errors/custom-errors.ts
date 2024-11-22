export enum ErrorCodes {
  Unknown = "Unknown",
  InvalidData = "InvalidData",
  ResourceAlreadyExists = "ResourceAlreadyExists",
}

export class CustomError extends Error {
  constructor(
    message: string,
    code: ErrorCodes = ErrorCodes.Unknown,
    public details?: string[],
  ) {
    super(message);
    this.name = code;
  }
}
