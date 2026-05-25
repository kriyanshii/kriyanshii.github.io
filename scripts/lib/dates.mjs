export function normalizeDate(value) {
  if (!value) return new Date().toISOString().split('T')[0];
  if (typeof value === 'string') return value.split('T')[0];
  if (value instanceof Date) return value.toISOString().split('T')[0];
  return String(value).split('T')[0];
}
