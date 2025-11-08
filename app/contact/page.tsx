'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', { method: 'POST', body: form });
    setStatus(res.ok ? 'Thanks! (demo endpoint)' : 'Something went wrong');
  }

  return (
    <section className="grid gap-4 max-w-lg">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-zinc-600">This portfolio uses a demo endpoint (no emails are sent).</p>
      <form onSubmit={submit} className="grid gap-3">
        <input name="name" required placeholder="Your name" className="border rounded p-2" />
        <input name="email" type="email" required placeholder="email@domain.com" className="border rounded p-2" />
        <textarea name="message" required placeholder="Message" className="border rounded p-2 h-28" />
        <button className="px-4 py-2 rounded bg-black text-white w-fit">Send</button>
      </form>
      {status && <p className="text-sm text-zinc-600">{status}</p>}
    </section>
  );
}
