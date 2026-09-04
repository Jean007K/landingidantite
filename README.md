# Landing Emverax

Sitio público de [emverax.com](https://emverax.com) (Next.js).

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El alta de empresas está en `/registro`.

## Variables de entorno

Copia `.env.example`:

```env
NEXT_PUBLIC_API_URL=https://api.emverax.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

En local, apunta `NEXT_PUBLIC_API_URL` a `http://127.0.0.1:8080`. El secreto de Turnstile (`TURNSTILE_SECRET_KEY`) vive solo en la API Go, nunca en esta app.

Sin site key, `/registro` envía el alta sin widget; la API también omite Turnstile fuera de producción.
