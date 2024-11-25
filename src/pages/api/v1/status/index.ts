import { NextApiRequest, NextApiResponse } from "next";
import { HttpCodes } from "@/commons/http/http";
import { query } from "@/services/datasource/database";
import * as process from "node:process";

export default async function status(
  _: NextApiRequest,
  response: NextApiResponse,
) {
  const now = new Date().toISOString();
  const {
    rows: [{ max_connections, version, opened_connections }],
  } = await query(
    "SELECT current_setting('max_connections')::int AS max_connections, current_setting('server_version') AS version, COUNT(*)::int AS opened_connections FROM pg_stat_activity WHERE datname = $1;",
    [process.env.POSTGRES_DB!],
  );
  return response.status(HttpCodes.OK).json({
    updated_at: now,
    dependencies: {
      database: {
        max_connections,
        opened_connections,
        version,
      },
    },
  });
}
