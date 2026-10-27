"use server";

import { headers } from "next/headers";
import { devisSchema, BIENS, ZONES, DELAIS } from "@/lib/validation/devis";
import { services, site } from "@/lib/site";
import { sendMail } from "@/lib/email";

export type DevisResult = { ok: true } | { ok: false; error: string };

// Limitation simple en mémoire (5 demandes/heure/IP) : suffisant pour un site vitrine.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const label = (list: readonly { value: string; label: string }[], v: string) =>
  list.find((x) => x.value === v)?.label ?? v;

export async function envoyerDevis(input: unknown): Promise<DevisResult> {
  const parsed = devisSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Certaines informations sont invalides. Merci de vérifier le formulaire." };
  const d = parsed.data;

  if (d.website) return { ok: true }; // honeypot rempli : on fait semblant que tout va bien

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnue";
  if (limited(ip)) return { ok: false, error: "Trop de demandes envoyées. Réessayez plus tard ou appelez-nous." };

  const to = process.env.DEVIS_TO;
  if (!to) {
    console.error("DEVIS_TO n’est pas défini");
    return { ok: false, error: "Le service d’envoi est momentanément indisponible." };
  }

  const serviceNames = d.services.map((slug) => services.find((s) => s.slug === slug)?.name ?? slug);
  const rows: [string, string][] = [
    ["Services", serviceNames.join(", ")],
    ["Type de bien", label(BIENS, d.bien)],
    ["Zone des travaux", label(ZONES, d.zone)],
    ["Ville du chantier", d.ville],
    ["Surface", d.surface || "Non précisée"],
    ["Délai souhaité", label(DELAIS, d.delai)],
    ["Description", d.description],
    ["Nom", d.nom],
    ["E-mail", d.email],
    ["Téléphone", d.telephone],
  ];
  const table = `<table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">${rows
    .map(([k, v]) => `<tr><td style="border:1px solid #d5ebe4"><b>${esc(k)}</b></td><td style="border:1px solid #d5ebe4;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join("")}</table>`;

  try {
    await sendMail({
      to,
      subject: `Nouvelle demande de devis — ${d.nom} (${serviceNames.join(", ")})`,
      html: `<h2 style="font-family:sans-serif">Nouvelle demande de devis</h2>${table}`,
      replyTo: d.email,
    });
  } catch (e) {
    console.error("Échec de l’envoi du devis", e);
    return { ok: false, error: "L’envoi a échoué. Merci de réessayer dans quelques instants." };
  }

  // Confirmation au client : non bloquante (un échec ne doit pas annuler la demande).
  try {
    await sendMail({
      to: d.email,
      subject: `Votre demande de devis — ${site.name}`,
      html: `<p style="font-family:sans-serif">Bonjour ${esc(d.nom)},</p><p style="font-family:sans-serif">Nous avons bien reçu votre demande et reviendrons vers vous rapidement.</p>${table}<p style="font-family:sans-serif">${esc(site.name)} — ${esc(site.tagline)}</p>`,
    });
  } catch (e) {
    console.warn("Confirmation client non envoyée", e);
  }
  return { ok: true };
}
