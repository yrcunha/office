import { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/services/datasource/database";
import { HttpCodes } from "@/commons/http/http";

export default async function status(
  _request: NextApiRequest,
  response: NextApiResponse,
) {
  const result = await query("SELECT 1 + 1;");
  console.log(result);
  return response.status(HttpCodes.OK).json({ status: "OK" });
}
