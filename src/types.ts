import Names from './names';
import NativeNames from './nativeNames';

/** @type LanguageName[] */
const all = [...Object.values(Names)];
const ALL = [...all] as const;

/** @type LanguageNativeName[] */
const natives = [...Object.values(NativeNames)];
const NATIVES = [...natives] as const;

type LanguageEnglishName = (typeof ALL)[number];
type LanguageNativeName = (typeof NATIVES)[number];
type LanguageName = LanguageEnglishName | LanguageNativeName;

/**
 * Checks whether a value is a known English language name.
 *
 * @param name - Value to validate.
 * @returns `true` when the value is one of the supported English language names.
 */
const isEnglishName = (name: any, caseSensitive: boolean): boolean => {
  if (caseSensitive) return ALL.includes(name);
  const lowerName = name.toLowerCase();
  return ALL.some(n => n.toLowerCase() === lowerName);
};

/**
 * Checks whether a value is a known native language name.
 *
 * @param name - Value to validate.
 * @returns `true` when the value is one of the supported native language names.
 */
const isNativeName = (name: any, caseSensitive: boolean): boolean => {
  if (caseSensitive) return NATIVES.includes(name);
  const lowerName = name.toLowerCase();
  return NATIVES.some(n => n.toLowerCase() === lowerName);
};

/**
 * Checks whether a value is either an English or native language name from this package.
 *
 * @param name - Value to validate.
 * @returns `true` when the value matches a supported language name in either form.
 */
const isLanguageName = (name: any, caseSensitive: boolean): boolean =>
  isEnglishName(name, caseSensitive) || isNativeName(name, caseSensitive);

export type { LanguageEnglishName, LanguageNativeName, LanguageName };

export default {
  all,
  natives,
  ALL,
  NATIVES,
  isNativeName,
  isEnglishName,
  isLanguageName,
};
