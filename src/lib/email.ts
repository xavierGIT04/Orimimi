import nodemailer, { type Transporter } from "nodemailer";
import { site } from "./site";

export type Mail = { to: string; subject: string; html: string; replyTo?: string };

let transporter: Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

// Envoi par SMTP (Google Workspace, boîte Hostinger, ou tout autre fournisseur).
export async function sendMail({ to, subject, html, replyTo }: Mail) {
  const user = process.env.SMTP_USER;
  if (!process.env.SMTP_HOST || !user || !process.env.SMTP_PASS) {
    throw new Error("SMTP non configuré (SMTP_HOST, SMTP_USER, SMTP_PASS)");
  }
  // L’expéditeur doit être la boîte authentifiée, sinon Google/Hostinger le réécrivent ou le rejettent.
  await getTransporter().sendMail({ from: `"${site.name}" <${user}>`, to, subject, html, replyTo });
}
