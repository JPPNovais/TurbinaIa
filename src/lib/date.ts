/**
 * Utilities for formatting dates safely on both server and client without causing hydration mismatches.
 */

// Safe month arrays
const shortMonths = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
const longMonths = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

/**
 * Formats a date string (YYYY-MM-DD) into medium format: "DD de [mês_curto] de YYYY"
 * Example: "2026-05-21" -> "21 de mai. de 2026"
 */
export function formatDateMedium(dateStr: string): string {
  if (!dateStr) return '';
  const cleanDate = dateStr.split('T')[0];
  const parts = cleanDate.split('-');
  if (parts.length < 3) return dateStr;
  const [year, month, day] = parts;
  const monthIndex = parseInt(month, 10) - 1;
  const formattedMonth = shortMonths[monthIndex] || '';
  return `${parseInt(day, 10)} de ${formattedMonth} de ${year}`;
}

/**
 * Formats a date string (YYYY-MM-DD) into long format: "DD de [mês_longo] de YYYY"
 * Example: "2026-05-21" -> "21 de maio de 2026"
 */
export function formatDateLong(dateStr: string): string {
  if (!dateStr) return '';
  const cleanDate = dateStr.split('T')[0];
  const parts = cleanDate.split('-');
  if (parts.length < 3) return dateStr;
  const [year, month, day] = parts;
  const monthIndex = parseInt(month, 10) - 1;
  const formattedMonth = longMonths[monthIndex] || '';
  return `${parseInt(day, 10)} de ${formattedMonth} de ${year}`;
}

/**
 * Formats a date string (YYYY-MM-DD) into short format: "DD de [mês_curto]"
 * Example: "2026-05-21" -> "21 de mai."
 */
export function formatDateShort(dateStr: string): string {
  if (!dateStr) return '';
  const cleanDate = dateStr.split('T')[0];
  const parts = cleanDate.split('-');
  if (parts.length < 3) return dateStr;
  const [_, month, day] = parts;
  const monthIndex = parseInt(month, 10) - 1;
  const formattedMonth = shortMonths[monthIndex] || '';
  return `${parseInt(day, 10)} de ${formattedMonth}`;
}
