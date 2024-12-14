import { headers } from "next/headers";

export enum HttpCodes {
  OK = 200,
  Created = 201,
  Unauthorized = 401,
  NotFound = 404,
  MethodNotAllowed = 405,
  InternalServerError = 500,
}

export async function fetchAPI(path: string, options?: RequestInit) {
  const header = await headers();
  const baseUrl = `${header.get("x-forwarded-proto") ?? "http"}://${header.get("host")!}/api`;
  const response = await fetch(`${baseUrl}${path}`, options);
  return {
    ok: response.ok,
    status: response.status,
    data: await response.json(),
  };
}
