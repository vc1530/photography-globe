import { NextResponse } from "next/server";
import { find } from "geo-tz";

// GET /api/timezones?lat=40.7128&lon=-74.0060
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const latParam = searchParams.get("lat");
    const lonParam = searchParams.get("lon");

    if (!latParam || !lonParam) {
      return NextResponse.json(
        { error: "Missing lat or lon query parameters" },
        { status: 400 }
      );
    }

    const lat = Number(latParam);
    const lon = Number(lonParam);

    if (isNaN(lat) || isNaN(lon)) {
      return NextResponse.json(
        { error: "Invalid lat or lon values" },
        { status: 400 }
      );
    }

    const timezone = find(lat, lon)[0]; // geo-tz returns an array
    return NextResponse.json({ timezone });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to get timezone" },
      { status: 500 }
    );
  }
}
