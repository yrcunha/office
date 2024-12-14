import { NextRequest, NextResponse } from "next/server";
import { query } from "@/features/services/datasource/database";
import { HttpCodes } from "@/shared/lib/http/http";
import { sign } from "jsonwebtoken";
import { headers } from "next/headers";
import { randomUUID } from "node:crypto";
import { UnauthorizedError } from "@/shared/lib/errors/unauthorized.error";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = await query(
    `
      SELECT id
      FROM users
      WHERE password = $1
        AND (email = $2 OR document = $2)
    `,
    [data.password, data.user],
  );
  if (!result?.rows.length) {
    return NextResponse.json(new UnauthorizedError(""), {
      status: HttpCodes.Unauthorized,
    });
  }
  const header = await headers();
  const host = `${header.get("x-forwarded-proto") ?? "http"}://${header.get("host")!}`;
  return NextResponse.json(
    {
      auth: true,
      token: sign({}, process.env.JWT_PRIVATE_KEY!, {
        issuer: host,
        subject: result.rows[0].id,
        expiresIn: process.env.JWT_EXPIRES_IN!,
        jwtid: randomUUID(),
      }),
    },
    {
      status: HttpCodes.OK,
    },
  );
}
