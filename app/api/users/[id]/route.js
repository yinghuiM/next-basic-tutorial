import { NextResponse } from "next/server";

export function GET(req, { params }) {
  return NextResponse.json({ user: `user${params.id}` });
}
