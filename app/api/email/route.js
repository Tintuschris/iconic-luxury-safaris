import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplate = (type, data) => {
  const baseTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #0A0A0A; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0A0A0A; padding: 20px; text-align: center; }
          .logo { max-width: 200px; }
          .content { padding: 20px; background-color: #ffffff; }
          .footer { background-color: #C6A870; color: white; padding: 20px; text-align: center; }
          .data-row { margin: 10px 0; border-bottom: 1px solid #eee; padding: 10px 0; }
          h2 { color: #C6A870; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
          <img src="https://iconic-luxury-safaris.vercel.app/logo.png" alt="Iconic Luxury Safaris" class="logo">
          </div>
          <div class="content">
  `;

  let specificContent = "";
  switch (type) {
    case "quote":
      specificContent = `
        <h2>New Safari Quote Request</h2>
        <div class="data-row"><strong>Name:</strong> ${data.name}</div>
        <div class="data-row"><strong>Email:</strong> ${data.email}</div>
        <div class="data-row"><strong>Destination:</strong> ${data.destination}</div>
        <div class="data-row"><strong>Travel Dates:</strong> ${data.startDate} to ${data.endDate}</div>
        <div class="data-row"><strong>Number of Travelers:</strong> ${data.travelers}</div>
        <div class="data-row"><strong>Additional Notes:</strong> ${data.notes}</div>
      `;
      break;

    case "contact":
      specificContent = `
        <h2>New Contact Message</h2>
        <div class="data-row"><strong>Name:</strong> ${data.firstName} ${data.lastName}</div>
        <div class="data-row"><strong>Email:</strong> ${data.email}</div>
        <div class="data-row"><strong>Message:</strong> ${data.message}</div>
      `;
      break;

    case "newsletter":
      specificContent = `
        <h2>New Newsletter Subscription</h2>
        <div class="data-row"><strong>Email:</strong> ${data.email}</div>
      `;
      break;
  }

  return `
    ${baseTemplate}
    ${specificContent}
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Iconic Luxury Safaris</p>
      <p>Creating unforgettable luxury safari experiences in East Africa</p>
    </div>
    </div>
    </body>
    </html>
  `;
};

export async function POST(req) {
  const body = await req.json();
  const { type, data } = body;

  try {
    await resend.emails.send({
      from: "Iconic Luxury Safaris <onboarding@resend.dev>",
      to: "office@iconicluxury.co.ke",
      subject: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Submission`,
      html: emailTemplate(type, data),
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
