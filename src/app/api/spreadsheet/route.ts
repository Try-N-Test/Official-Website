import { google, sheets_v4 } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  email: string;
}

const authenticateGoogleSheets = async () => {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const projectId = process.env.GOOGLE_PROJECT_ID;
  
  if (!privateKey || !clientEmail || !projectId) {
    throw new Error("Google service account credentials are not properly set.");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key: privateKey,
      client_email: clientEmail,
      project_id: projectId,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Missing 'email' field in the request body." },
        { status: 400 }
      );
    }

    const sheets: sheets_v4.Sheets = await authenticateGoogleSheets();

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const range = "Sheet1!A:A"; 
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred.";
    console.error("Error writing to Google Sheet:", errorMessage);

    return NextResponse.json(
      { error: "An error occurred while writing to the sheet." },
      { status: 500 }
    );
  }
}
