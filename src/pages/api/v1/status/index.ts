import { NextApiRequest, NextApiResponse } from "next";
import { HttpCodes } from "../../../../commons/http/http";

export default function status(
  _request: NextApiRequest,
  response: NextApiResponse,
) {
  return response.status(HttpCodes.OK).json({ status: "OK" });
}
