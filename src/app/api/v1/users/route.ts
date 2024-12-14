import { query } from "@/features/services/datasource/database";
import { NextRequest, NextResponse } from "next/server";
import { HttpCodes } from "@/shared/lib/http/http";
import { ulid } from "ulid";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = await query(
    `
      INSERT INTO users (id, name, social_name, document, password,
                         professional_code, email, phone)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id;
    `,
    [
      ulid(),
      data.name,
      data.social_name,
      data.document,
      Math.random().toString(36).slice(-11),
      data.oab,
      data.email,
      data.phone,
    ],
  );
  return NextResponse.json(
    {
      id: result!.rows[0].id,
    },
    {
      status: HttpCodes.Created,
    },
  );
}
