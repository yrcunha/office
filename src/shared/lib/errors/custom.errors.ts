export enum ErrorCodes {
  Unknown = "Unknown",
  InvalidPayload = "InvalidPayload",
  ResourceAlreadyExists = "ResourceAlreadyExists",
  ResourceNotFound = "ResourceNotFound",
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
