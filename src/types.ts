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
const isEnglishName = (name: any): boolean => ALL.includes(name);

/**
 * Checks whether a value is a known native language name.
 *
 * @param name - Value to validate.
 * @returns `true` when the value is one of the supported native language names.
 */
const isNativeName = (name: any): boolean => NATIVES.includes(name);

/**
 * Checks whether a value is either an English or native language name from this package.
 *
 * @param name - Value to validate.
 * @returns `true` when the value matches a supported language name in either form.
 */
const isLanguageName = (name: any): boolean => isEnglishName(name) || isNativeName(name);

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
