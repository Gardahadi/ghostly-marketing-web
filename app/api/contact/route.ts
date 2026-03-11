import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const RECIPIENTS = [
  "Saksham Saraswat <ss4436@cornell.edu>",
  "Marquis Wong <myw22@cornell.edu>",
  "Zexun Yao <zy483@cornell.edu>",
  "Jiayu Xu <jx387@cornell.edu>",
];

export async function POST(req: NextRequest) {
  const { email, website, description } = await req.json();

  if (!email || !website) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Ghost Monitor <onboarding@resend.dev>",
    to: RECIPIENTS,
    replyTo: email,
    subject: `New Ghost Monitor inquiry from ${email}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a2e;">
        <div style="background: #0d1220; border-radius: 12px; padding: 32px; color: #e8eeff;">
          <p style="font-size: 12px; font-weight: 600; letter-spacing: 0.08em; color: #4fcfbe; margin: 0 0 20px;">
            GHOST MONITOR — NEW INQUIRY
          </p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6b7a99; font-size: 13px; width: 120px;">
                Email
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 13px;">
                <a href="mailto:${email}" style="color: #4fcfbe;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6b7a99; font-size: 13px;">
                Website
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 13px;">
                <a href="${website}" style="color: #4fcfbe;">${website}</a>
              </td>
            </tr>
            ${
              description
                ? `<tr>
              <td style="padding: 10px 0; color: #6b7a99; font-size: 13px; vertical-align: top;">
                Details
              </td>
              <td style="padding: 10px 0; font-size: 13px; white-space: pre-wrap;">
                ${description}
              </td>
            </tr>`
                : ""
            }
          </table>
          <p style="margin: 24px 0 0; font-size: 11px; color: #3d4a60;">
            Sent via Ghost Monitor contact form
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
