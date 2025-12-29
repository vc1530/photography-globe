// GIVEN a latitude and longitude
// GET the timezone

// GET /api/timezones?lat={LATITUDE}&lon={LONGITUDE}

import { NextResponse } from "next/server";
import { find } from "geo-tz";

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

    const timezone = find(lat, lon)[0];
    return NextResponse.json({ timezone });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to get timezone, " + err },
      { status: 500 }
    );
  }
}
