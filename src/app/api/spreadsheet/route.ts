import { google, sheets_v4 } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

// Define the expected request body type
interface RequestBody {
  email: string;
}

// Define a reusable function for Google Sheets authentication
const authenticateGoogleSheets = async () => {
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    throw new Error("Google service account credentials are not set.");
  }

  const credentials = JSON.parse(serviceAccountKey);

  if (!credentials.private_key) {
    throw new Error("Invalid service account credentials.");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Parse and validate request body
    const body: RequestBody = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Missing 'email' field in the request body." },
        { status: 400 }
      );
    }

    // Authenticate with Google Sheets API
    const sheets: sheets_v4.Sheets = await authenticateGoogleSheets();

    // Google Sheet ID and range
    const spreadsheetId = "1FsDcSX9M7H0oBRP4St-O6GIvG_c4GGEZ7ziF1CwKATI";
    const range = "Sheet1!A:A"; // Automatically appends to the first empty row in column A

    // Append the email to the Google Sheet
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
