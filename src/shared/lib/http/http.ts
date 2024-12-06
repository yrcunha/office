export enum HttpCodes {
  OK = 200,
  Created = 201,
  MethodNotAllowed = 405,
  InternalServerError = 500,
}

export async function fetchAPI(props: { path: string; options?: RequestInit }) {
  const response = await fetch(props.path, props.options);
  return await response.json();
}
