import { NEVYPLNENO } from '../functions';

export const optionsDateLocal: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};
export const optionsDateTimeLocal: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
};

/**
 * Nastavení formátu data na Lokální nastavení
 * Použití valueFormatter: dateFotmat,
 * @param data params aggridu
 * @returns datum ve formátu local
 */
export const dateFotmat = (data: any): string => {
  return data.value
    ? new Date(data.value).toLocaleDateString('cs-CZ', optionsDateLocal)
    : NEVYPLNENO;
};

/**
 * Nastavení formátu data na Lokální nastavení
 * Použití valueFormatter: dateFotmat,
 * @param data params aggridu
 * @returns datum ve formátu local
 */
export const dateTimeFotmat = (data: any): string => {
  return data.value
    ? new Date(data.value).toLocaleDateString('cs-CZ', optionsDateTimeLocal)
    : NEVYPLNENO;
};

/**
 * Metoda pro ověření hodnoty Data
 * @param datum hodnota datumu
 * @returns Vrací string českého formátu data nebo NEVYPLNENO
 */
export const getDatum = (datum: string | Date | undefined): string => {
  return datum !== undefined
    ? new Date(datum).toLocaleDateString('cs-CZ', optionsDateLocal)
    : NEVYPLNENO;
};

/**
 * Metoda pro ověření hodnoty Data a času
 * @param datum hodnota datumu a času
 * @returns Vrací string českého formátu datumu a času nebo ''
 */
export const getDatumCas = (datum: string | Date | undefined): string => {
  return datum !== undefined
    ? new Date(datum).toLocaleDateString('cs-CZ', optionsDateTimeLocal)
    : NEVYPLNENO;
};

/**
 * Metoda pro ověření hodnoty Data
 * @param datum hodnota datumu
 * @returns Vrací string českého formátu datumu nebo 'Nevyplněno'
 */
export const getDatumStringNull = (datum: unknown): string => {
  return datum !== undefined &&
    datum != null &&
    (typeof datum === 'string' || datum instanceof Date)
    ? new Date(datum).toLocaleDateString('cs-CZ', optionsDateLocal)
    : NEVYPLNENO;
};

/**
 * Metoda pro ověření hodnoty Data a času
 * @param datum hodnota datumu a času
 * @returns Vrací string českého formátu datumu a času nebo 'Nevyplněno'
 */
export const getDatumCasStringNull = (datum: unknown): string => {
  return datum !== undefined &&
    datum != null &&
    (typeof datum === 'string' || datum instanceof Date)
    ? new Date(datum).toLocaleDateString('cs-CZ', optionsDateTimeLocal)
    : NEVYPLNENO;
};

/**
 * Metoda pro ověření jestli hodnota je vyplněna
 * @param datum string neob Date | hodnota která může být datum nebo nevyplněna
 * @returns new Date() nebo undefined
 */
export const getDatumCasOrNull = (
  datum: string | Date | undefined,
): Date | null => {
  return datum !== undefined && datum !== '' ? new Date(datum) : null;
};

/**
 * Metoda pro předání hodnoty na API, kde je očekáváno DateOnly
 * @param datum Datum ve formátu 2024-12-13T12:59:59.0001
 * @returns Vrací pouze datum z tohoto
 */
export const getDateOnlyOrUndefined = (
  datum: Date | undefined,
): string | undefined => {
  return datum && datum.toString().substring(0, 10);
};
