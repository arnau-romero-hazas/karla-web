import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().max(200),
  message: z.string().trim().max(5000),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, {
      status: 400,
    });
  }

  const parsed = contactSchema.safeParse(body);
  if (parsed.success === false) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, {
      status: 400,
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey === undefined || apiKey === "") {
    return NextResponse.json({ ok: false, error: "not_configured" }, {
      status: 500,
    });
  }

  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM ?? "Karla Web <onboarding@resend.dev>";
  const { name, email, message } = parsed.data;

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nuevo contacto de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (result.error !== null) {
    return NextResponse.json({ ok: false, error: "send_failed" }, {
      status: 502,
    });
  }

  return NextResponse.json({ ok: true });
}
