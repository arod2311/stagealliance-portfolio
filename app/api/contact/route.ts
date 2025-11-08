export async function POST() {
  // No-op for public portfolio; could log somewhere or integrate with a mock key.
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
