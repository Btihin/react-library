import { NEVYPLNENO } from '../functions';

/**
 * Metoda pro ověření hodnoty, případě že hodnata neexistuje, doplní Nevyplněno
 * @param value Jakákoliv hodnota například z API
 * @returns Vračí hodnotu nebo string NEVYPLNENO
 */
export const getNumberString = <T>(value: T): string => {
  return value === null || value === undefined
    ? NEVYPLNENO
    : Number(value)
    ? String(value)
    : 'Chyba hodnoty';
};
