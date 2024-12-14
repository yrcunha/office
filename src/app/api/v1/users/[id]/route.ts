import { NextRequest, NextResponse } from "next/server";
import { HttpCodes } from "@/shared/lib/http/http";
import { query } from "@/features/services/datasource/database";
import { ResourceNotFoundError } from "@/shared/lib/errors/resource-not-found.error";

export async function GET(
  _: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  const { id } = await params;
  const result = await query(
    `
      SELECT id,
             name,
             social_name,
             document,
             password,
             professional_code,
             email,
             phone
      FROM users
      WHERE id = $1
    `,
    [id],
  );
  if (result?.rows.length) {
    return NextResponse.json(result.rows[0], {
      status: HttpCodes.OK,
    });
  }
  return NextResponse.json(new ResourceNotFoundError(""), {
    status: HttpCodes.NotFound,
  });
}
