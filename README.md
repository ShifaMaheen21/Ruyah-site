# Ruyah Institute website

A responsive React/Vite website inspired by Frame 1 of the supplied Ruyah Figma file.

## Run locally

```powershell
npm install
npm run dev
```

## WhatsApp setup

Create a `.env` file in this folder and add the institute's WhatsApp number in international format without `+`, spaces, or dashes:

```text
VITE_WHATSAPP_NUMBER=918638854236
```

Without a configured number, WhatsApp still opens with the prepared message and lets the visitor choose a recipient.

## Included routes

- `/` — landing page
- `/courses` — complete course catalogue
- `/course/arabic-language`
- `/course/spoken-english`
- `/course/python-ai-tools`
- `/enroll` — participant form that prepares a WhatsApp enrollment message
