import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REFRESH_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
  }

  const tag = request.nextUrl.searchParams.get("tag");
  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
  }

  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, tag, now: Date.now() });
}
