import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = "info@finlever.co";
const FROM_EMAIL = "FinLever <noreply@finlever.co>";

function formatTimestamp(): string {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });
}

function buildAdminHtml(data: {
  name: string;
  email: string;
  company?: string;
  service: string;
  requirement: string;
}): string {
  const companyRow = data.company
    ? `<tr>
        <td style="padding:16px 0;border-top:1px solid #edf0f4;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7c8899;">Company</p>
          <p style="margin:0;font-size:15px;color:#1a2332;font-weight:500;">${data.company}</p>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Contact Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#0a1224;padding:28px 36px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.55);">FinLever Consulting</p>
            <h1 style="margin:8px 0 0;font-size:20px;font-weight:600;color:#ffffff;line-height:1.3;">New Contact Inquiry</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:16px;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7c8899;">Name</p>
                  <p style="margin:0;font-size:15px;color:#1a2332;font-weight:500;">${data.name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 0;border-top:1px solid #edf0f4;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7c8899;">Email</p>
                  <p style="margin:0;font-size:15px;"><a href="mailto:${data.email}" style="color:#2563eb;text-decoration:none;">${data.email}</a></p>
                </td>
              </tr>
              ${companyRow}
              <tr>
                <td style="padding:16px 0;border-top:1px solid #edf0f4;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7c8899;">Service of Interest</p>
                  <p style="margin:0;font-size:15px;color:#1a2332;font-weight:500;">${data.service}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 0;border-top:1px solid #edf0f4;">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7c8899;">Requirement</p>
                  <p style="margin:0;font-size:14px;color:#3d4e63;line-height:1.7;white-space:pre-wrap;">${data.requirement}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px;border-top:1px solid #edf0f4;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7c8899;">Submitted</p>
                  <p style="margin:0;font-size:13px;color:#7c8899;">${formatTimestamp()}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f8f9fb;padding:16px 36px;border-top:1px solid #edf0f4;">
            <p style="margin:0;font-size:12px;color:#9aa3ae;">This notification was sent from the contact form at finlever.co</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildUserHtml(name: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>We've Received Your Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#0a1224;padding:28px 36px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.55);">FinLever Consulting</p>
            <h1 style="margin:8px 0 0;font-size:20px;font-weight:600;color:#ffffff;line-height:1.3;">We've Received Your Inquiry</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 36px 28px;">
            <p style="margin:0 0 20px;font-size:15px;color:#3d4e63;line-height:1.7;">Dear ${name},</p>
            <p style="margin:0 0 20px;font-size:15px;color:#3d4e63;line-height:1.7;">Thank you for reaching out to FinLever Consulting. We have received your inquiry and it has been forwarded to our team for review.</p>
            <p style="margin:0 0 20px;font-size:15px;color:#3d4e63;line-height:1.7;">Our team will coordinate with you within <strong style="color:#1a2332;">24 hours</strong>.</p>
            <p style="margin:0;font-size:15px;color:#3d4e63;line-height:1.7;">If you have any immediate questions, feel free to reach us at <a href="mailto:info@finlever.co" style="color:#2563eb;text-decoration:none;">info@finlever.co</a>.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 36px;"><div style="height:1px;background:#edf0f4;"></div></td>
        </tr>
        <tr>
          <td style="padding:20px 36px;">
            <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#1a2332;">FinLever Consulting</p>
            <p style="margin:0;font-size:12px;color:#9aa3ae;">Institutional-grade finance advisory</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, requirement } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !service?.trim() || !requirement?.trim()) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const [adminResult, userResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: "New Contact Inquiry — FinLever",
        html: buildAdminHtml({
          name: name.trim(),
          email: email.trim(),
          company: company?.trim() || undefined,
          service: service.trim(),
          requirement: requirement.trim(),
        }),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email.trim(),
        subject: "We've Received Your Inquiry — FinLever",
        html: buildUserHtml(name.trim()),
      }),
    ]);

    if (adminResult.status === "rejected") {
      console.error("[contact] Admin email failed:", adminResult.reason);
    }
    if (userResult.status === "rejected") {
      console.error("[contact] User confirmation email failed:", userResult.reason);
    }

    if (adminResult.status === "fulfilled" && !adminResult.value.error) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 },
    );
  } catch (error) {
    console.error("[contact] Unhandled error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
