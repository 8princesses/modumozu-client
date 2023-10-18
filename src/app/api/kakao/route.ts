import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.modumozu.com/oauth2/authorization/kakao", {
    headers: {
      Accept: "application / json",
    },
  });
  console.log("res ==> ", res);
  const data = await res.json();
  console.log("data ==> ", data);
  return NextResponse.json({ data });
}
