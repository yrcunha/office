export enum ErrorCodes {
  Unknown = "Unknown",
  InvalidData = "InvalidData",
  ResourceAlreadyExists = "ResourceAlreadyExists",
  ServiceUnavailable = "ServiceUnavailable",
  MethodNotAllow = "MethodNotAllow",
}

export class CustomError extends Error {
  public timestamp: string;
  public details?: string[];

  constructor(
    message: string,
    code: ErrorCodes = ErrorCodes.Unknown,
    details?: string[],
  ) {
    super();
    super.name = code;
    super.message = message;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }
}
