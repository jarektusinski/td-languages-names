### [TusinskiDev] Languages Names
# td-languages-names

TypeScript library providing language names in English and in their native forms, with ready-to-use mapping utilities and validation helpers.

## Features

- list of English names: `ALL` (readonly), `all`
- list of native names: `NATIVES` (readonly), `natives`
- constants for individual languages, for example `Languages.POLISH` and `Languages.POLISH_NATIVE`
- English → native and native → English mapping via `toNative` and `toEnglish`
- validation helpers: `isEnglishName`, `isNativeName`, and `isName`
- typing support via `LanguageName`, `LanguageNativeName` and `LanguageNativeName`
- total count of supported languages: `LANGUAGES_COUNT`

## Installation

```bash
npm install td-languages-names
```

## Quick start

```ts
import Languages, { LanguageName, LanguageNativeName } from 'td-languages-names';

console.log(Languages.POLISH); // "Polish"
console.log(Languages.POLISH_NATIVE); // "Polski"
console.log(Languages.toNative('Polish')); // "Polski"
console.log(Languages.toEnglish('Polski')); // "Polish"
console.log(Languages.LANGUAGES_COUNT); // 232
```

## Available arrays and constants

```ts
import Languages from 'td-languages-names';

const { ALL, NATIVES, all, natives } = Languages;

console.log(ALL.length); // 232
console.log(ALL[0]); // "Acehnese"
console.log(all[0]); // "Acehnese"
console.log(NATIVES[0]); // "Bahsa Acèh"
console.log(natives[0]); // "Bahsa Acèh"
```

## Examples with individual language entries

```ts
import Languages from 'td-languages-names';

console.log(Languages.ENGLISH); // "English"
console.log(Languages.ENGLISH_NATIVE); // "English"
console.log(Languages.JAPANESE); // "Japanese"
console.log(Languages.JAPANESE_NATIVE); // "日本語"
console.log(Languages.GERMAN); // "German"
console.log(Languages.GERMAN_NATIVE); // "Deutsch"
```

## English → native mapping

```ts
import Languages from 'td-languages-names';

console.log(Languages.toNative('Japanese')); // "日本語"
console.log(Languages.toNative('Polish')); // "Polski"
console.log(Languages.toNative('German')); // "Deutsch"
```

## Native → English mapping

```ts
import Languages from 'td-languages-names';

console.log(Languages.toEnglish('日本語')); // "Japanese"
console.log(Languages.toEnglish('Polski')); // "Polish"
console.log(Languages.toEnglish('Deutsch')); // "German"
```

## Raw mapping objects

```ts
import Languages from 'td-languages-names';

console.log(Languages.ENGLISH_TO_NATIVE_NAMES_VO.Japanese); // "日本語"
console.log(Languages.ENGLISH_TO_NATIVE_NAMES_VO.Polish); // "Polski"
console.log(Languages.NATIVE_TO_ENGLISH_NAMES_VO['日本語']); // "Japanese"
console.log(Languages.NATIVE_TO_ENGLISH_NAMES_VO['Polski']); // "Polish"
```

## Validation helpers

```ts
import Languages from 'td-languages-names';

console.log(Languages.isEnglishName('Polish')); // true
console.log(Languages.isNativeName('Polish')); // false
console.log(Languages.isNativeName('Polski')); // true
console.log(Languages.isName('Polski')); // true
console.log(Languages.isName('Not a language')); // false
```

## TypeScript usage

```ts
import Languages, { LanguageName } from 'td-languages-names';

const slavicLanguages: LanguageName[] = ['Polish', 'Czech', 'Slovak', 'Croatian', 'Serbian'];
const selectOptions = slavicLanguages.map((lang) => ({ 
    value: Languages.toNative(lang)),
    name: lang,
});

console.log(selectOptions);
// [{name: "Polish", value: "Polski"}, {name: "Czech", value: "Čeština"}, ...]
```

## License

MIT

## Author

[Jarosław Tusiński](https://github.com/jarektusinski)
