/**
 * Generates a unique invoice number in the format TNT-YYYY-XXXXX
 * where YYYY is the current year and XXXXX is a random 5-digit number
 */
export function generateUniqueInvoiceNumber(): string {
  const currentYear = new Date().getFullYear();
  // Generate a random 5-digit number (between 10000 and 99999)
  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  
  return `TNT-${currentYear}-${randomDigits}`;
}
