/**
 * Returns true if the parameter is a URL string.
 */
export default function(val: any): boolean {
  return /^data:image\/[a-z]+;base64,/.test(val);
}