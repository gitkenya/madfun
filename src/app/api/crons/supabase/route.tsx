import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("users").select("id").limit(1);
    if (error) {
      return NextResponse.json(
        {
          response: null,
          success: false,
          error: error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { response: data, success: true },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
