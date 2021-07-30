export const addSpaceAndUpperCaseText = (key: string) =>
  key.replace(/([A-Z]|[0-9])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  }) + ':';

export function getCookie(name: string): string | undefined {
  if (typeof window !== undefined) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts[1].split(';').shift();
    }
  }
  return undefined;
}
