export function readingMinutes(body?: string | null): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
