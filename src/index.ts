import Names from './names';
import NativeNames from './nativeNames';
import Mappers from './maps';
import Types, { LanguageName, LanguageNativeName, LanguageEnglishName } from './types';

const LANGUAGES_COUNT = Types.ALL.length;

export type { LanguageName, LanguageNativeName, LanguageEnglishName };

export default {
  ...Names,
  ...NativeNames,
  ...Mappers,
  ...Types,
  LANGUAGES_COUNT,
};
