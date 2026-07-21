export function buildBookingHref(pickup: string, destination: string) {
  const params = new URLSearchParams({ pickup, destination });
  return `/?${params.toString()}#booking`;
}