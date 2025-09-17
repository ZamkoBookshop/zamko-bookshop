// lib/supabaseClient.js
// Lightweight helper that builds REST endpoint + headers for client fetch.
// Uses NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (set in Vercel).
export function supabaseFetch(path, opts = {}) {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/+$/, "");
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  if (!url || !anon) {
    // Return null when keys are missing; pages will fallback to sample data.
    return Promise.resolve(null);
  }

  const full = `${url}/rest/v1/${path}`;
  const headers = {
    apikey: anon,
    Authorization: `Bearer ${anon}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return fetch(full + (opts.query ? `?${opts.query}` : ""), {
    method: opts.method || "GET",
    headers,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  }).then(async (res) => {
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      const err = new Error(`Supabase REST error: ${res.status} ${txt}`);
      err.status = res.status;
      throw err;
    }
    return res.json();
  });
}
