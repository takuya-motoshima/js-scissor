/**
 * Returns true if the parameter is a URL string.
 */
export default function(val: any): boolean {
  return /^\/([^?\/]+)/.test(val);
}