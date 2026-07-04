import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || "pixelbytesolutions.in@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
              line-height: 1.6; 
              color: #333;
              background: #f5f7fa;
            }
            .container { 
              max-width: 600px; 
              margin: 40px auto; 
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #1a2332, #2FA4FF); 
              color: white; 
              padding: 40px 30px;
              text-align: center;
            }
            .header h2 { 
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 8px;
            }
            .header p { 
              opacity: 0.9;
              font-size: 16px;
            }
            .content { 
              padding: 40px 30px; 
              background: #ffffff;
            }
            .field { 
              margin-bottom: 28px;
              padding-bottom: 28px;
              border-bottom: 1px solid #f0f0f0;
            }
            .field:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .label { 
              font-size: 13px;
              font-weight: 600; 
              color: #888;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 6px;
              display: block;
            }
            .value { 
              font-size: 17px;
              color: #1a2332;
              font-weight: 500;
              word-wrap: break-word;
            }
            .value a {
              color: #2FA4FF;
              text-decoration: none;
            }
            .value a:hover {
              text-decoration: underline;
            }
            .message-value {
              background: #f8fafc;
              padding: 16px 20px;
              border-radius: 10px;
              border-left: 4px solid #2FA4FF;
              white-space: pre-wrap;
              font-size: 16px;
              line-height: 1.8;
              color: #333;
            }
            .meta {
              margin-top: 30px;
              padding: 20px;
              background: #f8fafc;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 14px;
              color: #666;
            }
            .meta span {
              display: flex;
              align-items: center;
              gap: 8px;
            }
            .footer { 
              padding: 30px;
              text-align: center;
              background: #f8fafc;
              border-top: 1px solid #eef2f7;
              color: #888;
              font-size: 13px;
            }
            .footer strong {
              color: #2FA4FF;
            }
            @media (max-width: 480px) {
              .container { margin: 20px; }
              .header { padding: 30px 20px; }
              .header h2 { font-size: 24px; }
              .content { padding: 25px 20px; }
              .meta { flex-direction: column; gap: 10px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📬 New Contact Form Submission</h2>
              <p>From PixelByte Solutions Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Full Name</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email Address</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">💬 Project Details</span>
                <div class="message-value">${message}</div>
              </div>
              <div class="meta">
                <span>📅 Submitted: ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</span>
                <span>🆔 #${Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
              </div>
            </div>
            <div class="footer">
              <p style="margin-bottom: 8px;">
                This message was sent from the <strong>PixelByte Solutions</strong> contact form.
              </p>
              <p style="font-size: 12px; color: #aaa;">
                © ${new Date().getFullYear()} PixelByte Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Submitted: ${new Date().toLocaleString()}
        ID: #${Math.random().toString(36).substring(2, 8).toUpperCase()}
        
        ---
        This message was sent from the PixelByte Solutions contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
