export const isEmpty = (object: {}) => {
  for (const property in object) {
    return false;
  }
  return true;
};

/**
 * Metoda pro ověření hodnoty, případě že hodnota neexistuje, doplní "Nevyplněno"
 * @param value Jakákoliv hodnota například z API
 * @returns Vrací hodnotu nebo string 'Nevyplněno'
 */
export const getValue = <T>(value: T): string | NonNullable<T> => {
  return value === null || value === undefined ? 'Nevyplněno' : value;
};
